/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_DEV_API: string
    readonly VITE_PROD_API: string
    readonly VITE_GH_USER: string
    readonly VITE_GH_TOKEN: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}