import React from 'react';
import { BrowserRouter as Router,Switch } from 'react-router-dom';
import { Home, Browse, SignIn, SignUp} from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect,ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';
export default function App() {
  // goes directly to sign in as it is a valid user.
  // const user= { name: 'lalaavipsha' }
  const { user } = useAuthListener();
  return (
  <Router>
    <Switch>
    <IsUserRedirect user={user} 
    loggedInPath={ROUTES.BROWSE} 
    path={ROUTES.SIGN_IN} 
    >
    <SignIn />
    </IsUserRedirect>
    <IsUserRedirect user={user} 
    loggedInPath={ROUTES.BROWSE} 
    path={ROUTES.SIGN_UP} 
    >
    <SignUp />
    </IsUserRedirect>
    <ProtectedRoute user={ user } path={ROUTES.BROWSE} exact>
    <Browse />
    </ProtectedRoute>
    <IsUserRedirect
    user={user}
    loggedInPath={ROUTES.HOME}
    path={ROUTES.HOME}
    exact
  >
    <Home />
  </IsUserRedirect>
  </Switch>
  </Router>
  );
}
