// app.js

function signup() {
  const email = prompt('Enter your email:');
  const password = prompt('Enter your password:');

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => console.log('User signed up'))
    .catch(error => console.error('Signup error:', error.message));
}

function login() {
  const email = prompt('Enter your email:');
  const password = prompt('Enter your password:');

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => console.log('User logged in'))
    .catch(error => console.error('Login error:', error.message));
}

function logout() {
  firebase.auth().signOut()
    .then(() => console.log('User logged out'))
    .catch(error => console.error('Logout error:', error.message));
}
