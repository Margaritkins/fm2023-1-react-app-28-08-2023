import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeContext, UserContext } from "./contexts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import UsersPage from "./pages/UsersPage";
import Page404 from "./pages/Page404";
import LoaderPage from "./pages/LoaderPage";
import UsersBlock from "./pages/LoaderPage/UsersBlock";
import EventsBlock from "./pages/LoaderPage/EventsBlock";
import ProductsBlock from "./pages/LoaderPage/ProductsBlock";
import { THEMES } from "./constants";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        firstName: "Brad",
        lastName: "Pitt",
        isSelect: false,
        avatar:
          "https://i.pinimg.com/originals/af/0a/62/af0a621b0d7edbc5ab835144dc0fa4df.gif",
      },
      theme: THEMES.LIGHT,
    };
  }

  selectorUser = (id) => {
    this.setState({
      user: { ...this.state.user, isSelect: !this.state.user.isSelect },
    });
  };

  changeTheme = (theme) => {
    this.setState({
      theme: this.state.theme === THEMES.LIGHT ?  THEMES.DARK:THEMES.LIGHT 
    });
  };

  render() {
    const { user, theme } = this.state;
    return (
      <ThemeContext.Provider value={ [theme, this.changeTheme ]}>
        <UserContext.Provider value={{ user, selectorUser: this.selectorUser }}>
          <BrowserRouter>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/loader/" element={<LoaderPage />}>
                  <Route path="users" element={<UsersBlock />} />
                  <Route path="events" element={<EventsBlock />} />
                  <Route path="products" element={<ProductsBlock />} />
                </Route>
                <Route path="*" element={<Page404 />} />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default App;
