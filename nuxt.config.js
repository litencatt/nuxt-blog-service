export default {
    mode: "universal",
    srcDir: "app",
    head: {
        title: process.env.npm_package_name || "",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || ""
            }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },
    loading: { color: "#fff" },
    css: ["element-ui/lib/theme-chalk/index.css"],
    plugins: ["@/plugins/element-ui"],
    router: {
        middleware: ['auth-cookie']
    },
    devModules: [],
    modules: [
        '@nuxtjs/axios'
    ],
    axios: {
        baseURL: process.env.BASE_URL
    },
    build: {
        transpile: [/^element-ui/],
        extend(config, ctx) {}
    }
}
