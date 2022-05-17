import axios from 'axios';
import React, { FC } from 'react';
import { useActions } from './../../redux/hooks/useActions';

const Login: FC = () => {
  const { loginAdmin, loginSkip } = useActions();
  const [login, setLogin] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const changeLoginHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };
  const changePasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSkipLoging = () => {
    loginSkip();
  };

  const handleLoginInputAdmin = () => {
    if (login === 'admin' && password === 'admin') {
      loginAdmin();
      loginSkip();
    } else {
      alert('login or password');
    }
  };

  return (
    <div className="container__form">
      <form action="" className="main__form">
        <label htmlFor="">Login</label>
        <input className="input__login" onChange={changeLoginHandler} value={login} type="text" />

        <label htmlFor="">Password</label>
        <input
          className="input__password"
          onChange={changePasswordHandler}
          value={password}
          type="password"
        />
      </form>
      <div></div>
      <div className="button__form">
        <button className="button__login" onClick={handleLoginInputAdmin}>
          Log In
        </button>
        <button className="button__skiplogin" onClick={handleSkipLoging}>
          Skip Log In
        </button>
      </div>
    </div>
  );
};

export default Login;
