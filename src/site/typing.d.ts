declare module '*.png' {
  const content: string
  export default content
}

declare module '*.module.styl' {
  const content: { [key: string]: string }
  export default content
}
