declare module '*.png' {
  const content: string
  export default content
}

declare module '*.module.styl' {
  const classes: { [key: string]: string }
  export default classes
}
