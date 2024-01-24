export interface Theme {
  bgColor: string
  fontColor: string
  bgGradient: string
}
interface ThemeGroup {
  light: Theme
  dark: Theme
}

export const light: Theme = {
  bgColor: '#fff',
  fontColor: '#000',
  bgGradient: 'linear-gradient(90deg, #328de4 0%, #a6babd 50%, #328de4 100%)'
}

export const dark: Theme = {
  bgColor: '#000',
  fontColor: '#eee',
  bgGradient: 'linear-gradient(90deg, #191B1D 0%, #474E4F 50%, #191B1D 100%)'
}

const mode: ThemeGroup = {
  light,
  dark
}

export default mode
