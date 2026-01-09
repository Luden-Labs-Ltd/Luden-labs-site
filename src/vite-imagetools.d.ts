/// <reference types="vite-imagetools/client" />

declare module "*?format=webp" {
  const src: string;
  export default src;
}

declare module "*.png?format=webp" {
  const src: string;
  export default src;
}

declare module "*.jpg?format=webp" {
  const src: string;
  export default src;
}

declare module "*.jpeg?format=webp" {
  const src: string;
  export default src;
}
