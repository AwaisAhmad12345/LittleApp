import React from 'react'
import { UserContextProvider } from './src/services/UserContext';
import { Router } from './src/router/Router'

export default function App() {

  return (
    <UserContextProvider>
      <Router />
    </UserContextProvider>
  );
}

