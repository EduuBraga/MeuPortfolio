import React, { createContext, useState } from "react"

import { ThemeDark } from "../../Styles/Themes/dark"
import { ThemeLight } from "../../Styles/Themes/light"
import audioClose from '../../assets/audios/open.mp3'
import audioOpen from '../../assets/audios/close.mp3'

export const ThemeContext = createContext()

export function ThemesProvider(props) {
  const [theme, setTheme] = useState(ThemeDark)
  const [srcAudio, setSrcAudio] = useState(audioOpen)

  function HandleSrcAudio(){
    srcAudio === audioOpen ? setSrcAudio(audioClose) : setSrcAudio(audioOpen)
  }

  function handleThemes() {
    theme.title === 'dark' ? setTheme(ThemeLight) : setTheme(ThemeDark)
  }
  function handleThemesMenu() {
    theme.title === 'dark' ? setTheme(ThemeLight) : setTheme(ThemeDark)
    HandleSrcAudio()
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, handleThemes, srcAudio, setSrcAudio, HandleSrcAudio, handleThemesMenu}}>
      {props.children}
    </ThemeContext.Provider>
  )
}