import React, { useReducer } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import { UserContext, ThemeContext, MenuContext } from './contexts';

import Header from './components/Header';
import Footer from './components/Footer';
import SignInForm from './components/forms/SignInForm';

import Home from './pages/Home';
import UsersPage from './pages/UsersPage';
import Page404 from './pages/Page404';
import LoaderPage from './pages/LoaderPage';
import UsersBlock from './pages/LoaderPage/UsersBlock';
import EventsBlock from './pages/LoaderPage/EventsBlock';
import ProductsBlock from './pages/LoaderPage/ProductsBlock';
import FormsPage from './pages/FormsPage';

import { useAuthUser, useTheme, useClicker } from './hooks';

import CallbackForm from './components/forms/CallbackForm';
import AnketForm from './components/forms/AnketForm';
import Chat from './components/Chat';

import appReducer from './appReducer';
import { STATUS_MENU } from './constants';

const App = (props) => {
  const { user, selectorUser } = useAuthUser({
    id: 1,
    firstName: 'Brad',
    lastName: 'Pitt',
    isSelect: false,
    avatar: 'https://cdn-icons-png.flaticon.com/128/3641/3641963.png',
  });

  const [state, dispatch] = useReducer(appReducer, { isMenuOpen: false });
  const handleOpenMenu = (event) => {
    event.stopPropagation();
    return dispatch({ type: STATUS_MENU.OPEN });
  };
  const handleCloseMenu = () => dispatch({ type: STATUS_MENU.CLOSE });

  return (
    <ThemeContext.Provider value={useTheme()}>
      <UserContext.Provider value={{ user, selectorUser }}>
        <MenuContext.Provider value={{ state, handleCloseMenu }}>
          <MenuOpenIcon fontSize="large" onClick={handleOpenMenu} />
          <p>{useClicker()}</p>
          <BrowserRouter>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/sign-up" element={<FormsPage />} />
                <Route path="/sign-in" element={<SignInForm />} />
                <Route path="/callback" element={<CallbackForm />} />
                <Route path="/anketa" element={<AnketForm />} />
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
        </MenuContext.Provider>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
