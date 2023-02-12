import React from 'react';
import './App.css';
import { login, logout } from './utils/near';

const App = () => {

  const nearAccount = window.walletConnection.account();
  return (
    <div className='App'>
      <h1>
        Near React Dapp
      </h1>

    {nearAccount.accountId ? (
      <div>
        <h2>Account ID: {nearAccount.accountId}</h2>
        <button onClick={logout}>Logout</button>
      </div>
    ) : (
      <button onClick={login}>Login</button>
    )}

    </div>

  )
}

export default App

