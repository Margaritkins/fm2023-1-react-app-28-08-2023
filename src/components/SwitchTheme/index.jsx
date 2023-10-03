import React from "react";
import { UserContext, ThemeContext } from "../../contexts";

const SwitchTheme = (props) => {
// const renderFunc=({user:{theme}, callback})=>{

//   return <button onClick={callback}>switch theme</button>;
// }
return(


  <ThemeContext.Consumer>
    {([theme, callback])=>{
      return <button onClick={callback}>switch theme</button>;
    }}
    {/* {renderFunc} */}
    </ThemeContext.Consumer>
  )
};

export default SwitchTheme;
