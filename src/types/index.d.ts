// https://webpack.js.org/guides/typescript/#importing-other-assets

// asset/source (raw-loader)
declare module '*.svg' {
  const content: string;
  export default content;
}

// file-loader
declare module '*.jpg' {
  const content: string;
  export default content;
}
declare module '*.webp' {
  const content: string;
  export default content;
}

// injected variables
declare const __webpack_HOST__: string;
