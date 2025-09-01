declare module 'react-syntax-highlighter' {
  import React from 'react';
  
  export interface SyntaxHighlighterProps {
    language?: string;
    style?: any;
    children?: React.ReactNode;
    customStyle?: React.CSSProperties;
    codeTagProps?: React.HTMLProps<HTMLElement>;
    useInlineStyles?: boolean;
    showLineNumbers?: boolean;
    showInlineLineNumbers?: boolean;
    startingLineNumber?: number;
    lineNumberContainerStyle?: React.CSSProperties;
    lineNumberStyle?: React.CSSProperties;
    wrapLines?: boolean;
    wrapLongLines?: boolean;
    lineProps?: any;
    renderer?: any;
    PreTag?: string | React.ComponentType<any>;
    CodeTag?: string | React.ComponentType<any>;
    [key: string]: any;
  }
  
  export class Prism extends React.Component<SyntaxHighlighterProps> {}
  export class Light extends React.Component<SyntaxHighlighterProps> {}
  export default class SyntaxHighlighter extends React.Component<SyntaxHighlighterProps> {}
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism' {
  export const duotoneDark: any;
  export const duotoneLight: any;
  export const prism: any;
  export const dark: any;
  export const funky: any;
  export const okaidia: any;
  export const twilight: any;
  export const coy: any;
  export const atomDark: any;
  export const base16AteliersulphurpoolLight: any;
  export const cb: any;
  export const coldarkCold: any;
  export const coldarkDark: any;
  export const coyWithoutShadows: any;
  export const dracula: any;
  export const ghcolors: any;
  export const hopscotch: any;
  export const lucario: any;
  export const materialDark: any;
  export const materialLight: any;
  export const materialOceanic: any;
  export const nord: any;
  export const pojoaque: any;
  export const shadesOfPurple: any;
  export const solarizedlight: any;
  export const synthwave84: any;
  export const vs: any;
  export const vscDarkPlus: any;
  export const xonokai: any;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism' {
  export * from 'react-syntax-highlighter/dist/esm/styles/prism';
}
