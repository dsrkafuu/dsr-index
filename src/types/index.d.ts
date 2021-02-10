// https://webpack.js.org/guides/typescript/#importing-other-assets

// css-loader, postcss-loader, sass-loader
declare module '*.css' {
  const content: string;
  export default content;
}
declare module '*.sass' {
  const content: string;
  export default content;
}
declare module '*.scss' {
  const content: string;
  export default content;
}

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
declare module '*.jpeg' {
  const content: string;
  export default content;
}
declare module '*.png' {
  const content: string;
  export default content;
}
declare module '*.gif' {
  const content: string;
  export default content;
}
declare module '*.webp' {
  const content: string;
  export default content;
}
declare module '*.ico' {
  const content: string;
  export default content;
}
declare module '*.woff2' {
  const content: string;
  export default content;
}
declare module '*.woff' {
  const content: string;
  export default content;
}

// injected variables
declare const __webpack_BASE__: string;
declare const __webpack_VERSION__: string;
declare const __webpack_HASH__: string;
declare const __webpack_GA__: string;
declare const __webpack_HOST__: string;
