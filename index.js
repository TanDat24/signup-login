function signup(e) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var gmail = document.getElementById("gmail").value;
  var password = document.getElementById("password").value;

  var user = {
    username: username,
    gmail: gmail,
    password: password,
  };
  var json = JSON.stringify(user);
  localStorage.setItem(username, json);
  alert("Đăng ký thành công");
}

function login(e) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var gmail = document.getElementById("gmail").value;
  var password = document.getElementById("password").value;
  var user = localStorage.getItem(username);
  var data = JSON.parse(user);
  if (user == null) {
    alert("chưa nhập password!!");
  } else if (
    username == data.username &&
    gmail == data.gmail &&
    password == data.password
  ) {
    alert("Đăng nhập thành công");
    window.location.href = "demon.html";
  } else {
    alert("Đăng nhập không thành công");
  }
}
