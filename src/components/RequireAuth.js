import React from 'react';
import {Redirect} from 'react-router-dom';
import {USER_KEY} from 'conf/consts';
import {login} from 'conf/routes';

export default function RequireAuth({Component}) {
  if (!window.localStorage.getItem(USER_KEY)) {
    return <Redirect to={login()} />;
  }
  return <Component />;
}
