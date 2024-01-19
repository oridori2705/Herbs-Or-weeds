export interface Theme {
  bgColor: string
  fontColor: string
}
interface ThemeGroup {
  light: Theme
  dark: Theme
}

export const light: Theme = {
  bgColor: '#fff',
  fontColor: '#000'
}

export const dark: Theme = {
  bgColor: '#000',
  fontColor: '#eee'
}

const mode: ThemeGroup = {
  light,
  dark
}

export default mode
