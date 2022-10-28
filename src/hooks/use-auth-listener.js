import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useAuthListener() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));// to check whether there is any user in local storage, and know whether they have logged in or logged out.
  const { firebase } = useContext(FirebaseContext);
  
  //react comes in play, useeffect comes to use as soon as the application is hit, it will bind the listener to listen for us.
  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });

    return () => listener();// removing the listner at the end.
  }, []);

  return { user };
}