import React from "react";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { UserContext, ThemeContext } from "../../contexts";

const SwitchTheme = (props) => {

return(


  <ThemeContext.Consumer>
    {([theme, callback])=>{
      return <div onClick={callback}>{<Brightness4Icon/>}</div>;
    }}
    {/* {renderFunc} */}
    </ThemeContext.Consumer>
  )
};

export default SwitchTheme;
