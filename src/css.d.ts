// src/css.d.ts

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}