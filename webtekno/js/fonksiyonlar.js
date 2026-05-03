function validateForm() {
  const email = document.getElementById("email").value.trim();

  if (!email.includes("@sakarya.edu.tr")) {
    alert("E-posta adresinizi doğru girip girmediğinizi kontrol ediniz.");
    return false;
  }

  const userName = email.split("@")[0];
  document.getElementById("userName").value = userName;

  return true;
}