function validateForm() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    alert("Kullanıcı adı ve şifre boş bırakılamaz.");
    return false;
  }

  const userName = email.split("@")[0];
  document.getElementById("userName").value = userName;

  return true;
}