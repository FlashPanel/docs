import { join } from "path";
import { defineConfig } from "vitepress";
import data from "./config.data";
import { buildItems } from "./utils";

const loadedData = data.load();

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: loadedData.name,
    base: "/docs/v2/",
    description: "A simple way to manage your servers",
    locales: {
        // root: {
        //     label: "Tiếng Việt",
        //     lang: "vi",
        // },
        vi: {
            label: "Tiếng Việt",
            lang: "vi",
            link: "/",
            themeConfig: {
                sidebar: [
                    {
                        text: `${loadedData.name} là gì?`,
                        link: "/vi/what-is-flash-panel",
                    },
                    {
                        text: "Kết nối",
                        items: buildItems(join(__dirname, "../vi/connect")),
                    },
                    {
                        text: "Máy chủ",
                        items: buildItems(join(__dirname, "../vi/server")),
                    },
                    {
                        text: "Website",
                        items: buildItems(join(__dirname, "../vi/site")),
                    },
                    {
                        text: "User",
                        items: buildItems(join(__dirname, "../vi/user")),
                    },
                    {
                        text: "Knowledge",
                        items: buildItems(join(__dirname, "../vi/knowledge")),
                    },
                    {
                        text: "Tutorial",
                        items: buildItems(join(__dirname, "../vi/tutorial")),
                    },
                ],
            },
        },
        // en: {
        //     label: "English",
        //     lang: "en",
        //     link: "/en",
        //     themeConfig: {
        //         sidebar: [
        //             { text: `What is ${loadedData.name}?`, link: "/en/what-is-flash-panel" },
        //             {
        //                 text: "Connect",
        //                 items: [{ text: "Connect Custom Server", link: "/en/connect-custom-server" }],
        //             },
        //         ],
        //     },
        // },
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [{ text: "Home", link: loadedData.url }],

        socialLinks: [{ icon: "facebook", link: loadedData.fbGroup }],

        outline: {
            level: [2, 3],
        },
        search: {
            provider: "algolia",
            options: {
                appId: "NSCKK3899P",
                apiKey: "0868a5afcd71904b8822987e3b92a099",
                indexName: "flashvps",
            },
        },
        editLink: {
            pattern: "https://github.com/FlashPanel/docs/edit/main/docs/:path",
        },
    },
    head: [
        //
    ],
    markdown: {
        toc: {
            level: [2, 3, 4],
        },
    },
    outDir: "../public/docs/v2",
    sitemap: {
        hostname: "https://flashpanel.io/docs/v2/",
    },
});
