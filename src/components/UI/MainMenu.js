import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {contact, formikContact, home, login, logout, spain} from 'conf/routes';

const MainMenu = ({onClickChangeThemeButton}) => (
  <nav>
    <ul>
    <li>
        <Link to={login()}>Iniciar sesión</Link>
      </li>
      <li>
        <Link to={home()}>Home</Link>
      </li>
      <li>
        <Link to={spain()}>España</Link>
      </li>
      <li>
        <Link to={contact()}>Contacto</Link>
      </li>
      <li>
        <Link to={formikContact()}>Contacto con Formik</Link>
      </li>
      <li>
        <Link to={logout()}>Cerrar sesión</Link>
      </li>
      <li>
        <button onClick={onClickChangeThemeButton}>Cambiar tema</button>
      </li>
    </ul>
  </nav>
);

MainMenu.propTypes = {
  onClickChangeThemeButton: PropTypes.func.isRequired
};

export default MainMenu;
