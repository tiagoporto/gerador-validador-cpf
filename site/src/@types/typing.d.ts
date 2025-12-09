declare module '*.png' {
  const content: string
  export default content
}

declare module '*.module.scss' {
  const classes: Record<string, string>
  export = classes
}
