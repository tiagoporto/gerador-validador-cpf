declare module '*.png' {
  const content: string
  export default content
}

declare module '*.module.scss' {
  const classes: { [key: string]: string }
  export default classes
}
