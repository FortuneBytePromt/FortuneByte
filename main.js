// Email 登入
function emailLogin() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  if (!email || !password) {
    alert("請輸入完整帳號與密碼");
    return;
  }
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = 'fortune.html'; // 登入成功導向占卜頁
    })
    .catch(err => {
      alert("登入失敗：" + err.message);
    });
}

// Email 註冊
function emailRegister() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  if (!email || !password) {
    alert("請輸入完整帳號與密碼");
    return;
  }
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = 'fortune.html'; // 註冊成功後自動登入
    })
    .catch(err => {
      alert("註冊失敗：" + err.message);
    });
}

// Google 登入
function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(() => {
      window.location.href = 'fortune.html'; // 登入成功導向占卜頁
    })
    .catch(err => {
      alert("Google 登入失敗：" + err.message);
    });
}
