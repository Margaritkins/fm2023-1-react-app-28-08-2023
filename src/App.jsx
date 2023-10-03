import React, { Component } from 'react';
import { UserContext } from './contexts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import UsersPage from './pages/UsersPage';
import Page404 from './pages/Page404';
import LoaderPage from './pages/LoaderPage';
import UsersBlock from './pages/LoaderPage/UsersBlock';
import EventsBlock from './pages/LoaderPage/EventsBlock';
import ProductsBlock from './pages/LoaderPage/ProductsBlock';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        firstName: 'Brad',
        lastName: 'Pitt',
        isSelect: false,
      },
    };
  }

  selectorUser = (id) => {
    this.setState({
      user: { ...this.state.user, isSelect: !this.state.user.isSelect },
    });
  };

  render() {
    const { user } = this.state;
    return (
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
    );
  }
}


export default App;
