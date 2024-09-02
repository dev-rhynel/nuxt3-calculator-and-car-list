export {NavType}

declare global {
  interface NavType {
    id: number | string
    name: string
    path: string
  }
}
