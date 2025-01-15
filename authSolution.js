// Solution using debouncing to handle rapid auth state changes
import { debounce } from 'lodash'; // Or a custom debounce function

firebase.auth().onAuthStateChanged(debounce((user) => {
  // Process the user state here
  if (user) {
    // User is signed in
    console.log('User is signed in:', user);
  } else {
    // User is signed out
    console.log('User is signed out');
  }
}, 500)); // Adjust debounce delay as needed