/// <reference types="vite/client" />
/// <reference types="./types/react-syntax-highlighter" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_LLM_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
