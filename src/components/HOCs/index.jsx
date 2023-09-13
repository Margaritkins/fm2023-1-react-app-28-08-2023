import { ThemeContext, UserContext } from '../../contexts';

export const withTheme = (InnerComponent) => (props) => {
  return (
    <ThemeContext.Consumer>
      {([theme, changeTheme]) => (
        <InnerComponent theme={theme} changeTheme={changeTheme} {...props} />
      )}
    </ThemeContext.Consumer>
  );
};

export const withUser = (InnerComponent) => (props) => {
  return (
    <UserContext.Consumer>
      {({ user, selectorUser }) => (
        <InnerComponent user={user} selectorUser={selectorUser} {...props} />
      )}
    </UserContext.Consumer>
  );
};


