function emailLogin() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => window.location.href = 'test.html')
    .catch(err => alert(err.message));
}

function emailRegister() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => window.location.href = 'test.html')
    .catch(err => alert(err.message));
}

function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(() => window.location.href = 'test.html')
    .catch(err => alert(err.message));
}
