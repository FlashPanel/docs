import { promises as fs } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function readDirRecursive(dir) {
  let files = [];

  const dirents = await fs.readdir(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const fullPath = join(dir, dirent.name);
    if (dirent.isDirectory()) {
      const subdirFiles = await readDirRecursive(fullPath);
      files = files.concat(subdirFiles);
    } else if (!dirent.name.startsWith(".")) {
      files.push(fullPath);
    }
  }

  return files;
}

(async () => {
  const files = await readDirRecursive(__dirname);
  const images = files
    .filter((v) => v.startsWith(__dirname + "/images/"))
    .map((v) => {
      return { path: v.replace(__dirname, ""), used: false };
    });

  const markdowns = files.filter((v) => v.endsWith(".md"));

  for (const markdown of markdowns) {
    const body = await fs.readFile(markdown, "utf-8");
    for (const image of images) {
      if (body.includes(image.path)) {
        image.used = true;
      }
    }
  }
  console.log(
    "unused images:\n",
    images.filter((v) => !v.used).map((v) => v.path)
  );
})();
