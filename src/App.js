import React, {useState, lazy, Suspense} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import styled, {ThemeProvider} from 'styled-components';
import MainMenu from 'components/UI/MainMenu';
import RequireAuth from 'components/RequireAuth';
import {contact, formikContact, home, login, logout, spain} from 'conf/routes';
import {darkTheme, lightTheme} from 'styles/theme';
import GlobalStyle from 'styles/GlobalStyle';

const Home = lazy(() => import('components/screens/Home'));
const Login = lazy(() => import('components/screens/Login'));
const Logout = lazy(() => import('components/screens/Logout'));
const Spain = lazy(() => import('components/screens/Spain'));
const Contact = lazy(() => import('components/screens/Contact'));
const FormikContact = lazy(() => import('components/screens/FormikContact'));

const MainContainer = styled.div`
  background-color: ${props => props.theme.backgroundColor};
`;

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleChangeTheme = () => {
    setIsDarkTheme(oldValue => !oldValue);
  };

  const currentTheme = isDarkTheme ? darkTheme : lightTheme;
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={currentTheme}>
        <MainContainer theme={currentTheme}>
          <Router>
            <Suspense fallback={<div>Cargando...</div>}>
              <div>
                <MainMenu onClickChangeThemeButton={handleChangeTheme} />
                <Switch>
                  <Route
                    path={spain()}
                    component={props => <RequireAuth {...props} Component={Spain} />}
                  />
                  <Route path={contact()}>
                    <Contact />
                  </Route>
                  <Route path={formikContact()}>
                    <FormikContact />
                  </Route>
                  <Route
                    path={home()}
                    component={props => <RequireAuth {...props} Component={Home} />}
                  />
                  <Route path={logout()}>
                    <Logout />
                  </Route>
                  <Route path={login()}>
                    <Login />
                  </Route>
                </Switch>
              </div>
            </Suspense>
          </Router>
        </MainContainer>
      </ThemeProvider>
    </>
  );
}
