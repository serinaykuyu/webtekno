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

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTA5NmM3OTQxNzRlYzcyZmIwZGI5ODQxZDY0YWVmMiIsIm5iZiI6MTc0ODE3MzI2NC4yMTUwMDAyLCJzdWIiOiI2ODMzMDFkMGI0NTdjZjVkZDEwNTUwNDYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.g1J96WeUZQuzj4C8udIh8CsPLFaR2kpxwWHFkVHmckM'
  }
};

function getFavoriteTVShows() {
  fetch('https://api.themoviedb.org/4/account/683301d0b457cf5dd1055046/tv/favorites?page=1&language=en-US&sort_by=created_at.asc', options)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      displayFavorites(data); // Sonuçları ekranda göstermek için
    })
    .catch(err => console.error(err));
}

function displayFavorites(data) {
  const container = document.getElementById("favorites");
  container.innerHTML = '';

  if (!data.results || data.results.length === 0) {
    container.innerText = "Favori TV programı bulunamadı.";
    return;
  }

  data.results.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("favorite-item");

    const imgSrc = item.poster_path 
      ? `https://image.tmdb.org/t/p/w300${item.poster_path}`
      : "https://via.placeholder.com/200x300?text=No+Image";

    div.innerHTML = `
      <img src="${imgSrc}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>Yayın yılı: ${item.first_air_date ? item.first_air_date.split('-')[0] : 'Bilinmiyor'}</p>
      <p>${item.overview ? item.overview.substring(0, 100) + "..." : "Açıklama yok."}</p>
    `;

    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", getFavoriteTVShows);// Sayfa yüklendiğinde çağır