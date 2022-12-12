import React, { useContext } from "react";
import { ThemeContext } from "../../Provider/ThemesProvider";

import { HandleImg } from "./style";

export const ImgToggleColor = ({ link, imgWhite, imgDark, imgHover, altMessage }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <a href={link} >
      {theme.title === 'dark' ? (
        <HandleImg>
          <img src={imgWhite} alt={altMessage} />
          <img src={imgHover} alt={altMessage} />
        </HandleImg>
      ) : (
        <HandleImg>
          <img src={imgDark} alt={altMessage} />
          <img src={imgHover} alt={altMessage} />
        </HandleImg>
      )}
    </a>
  );
}