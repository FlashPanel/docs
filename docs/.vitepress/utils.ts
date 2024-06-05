import fs from "fs";
import yaml from "js-yaml";
import path, { join } from "path";

// Function to read YAML Front Matter from a Markdown file
export function readYamlFrontMatter(filePath: string): any {
  // Read file contents
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // Split the content into lines
  const lines = fileContent.trim().split("\n");

  // Initialize YAML content
  let yamlContent = "";

  // Check if the file starts with YAML Front Matter marker '---'
  if (lines[0].trim() === "---") {
    // Find the end marker '---'
    let i = 1;
    while (i < lines.length && lines[i].trim() !== "---") {
      yamlContent += `${lines[i]}\n`;
      i++;
    }
  }

  // Parse YAML content
  const frontMatter = yaml.load(yamlContent);

  return frontMatter;
}

// Function to recursively get all files in a directory
export function getAllFiles(dir: string) {
  let files: { path: string; heading: string; position: number }[] = [];

  // Read contents of directory
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  // Iterate through directory contents
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    // If it's a file, add to the list
    if (entry.isFile()) {
      const meta = readYamlFrontMatter(fullPath);

      files.push({
        path: fullPath,
        heading: extractHeading(fullPath),
        position: meta?.position || 999,
      });
    }
    // If it's a directory, recursively call the function
    else if (entry.isDirectory()) {
      files = files.concat(getAllFiles(fullPath));
    }
  }

  return files;
}

// Function to extract heading level 1 from a Markdown file
function extractHeading(filePath: string): string {
  // Read file contents
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // Regular expression to match heading level 1
  const headingRegex = /^#\s+(.*)$/m;

  // Match the first occurrence of heading level 1
  const match = fileContent.match(headingRegex);

  // Extract the heading text
  if (match && match.length > 1) {
    return match[1].trim();
  }

  return "Undefined"; // Return null if no heading found
}

export function buildItems(dir: string) {
  const files = getAllFiles(dir);
  return files
    .sort((a, b) => a.position - b.position)
    .map((file) => {
      return {
        text: file.heading,
        link: file.path.replace(join(__dirname, ".."), "").replace(".md", ""),
      };
    });
}
