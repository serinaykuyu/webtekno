<?php>
header('Content-Type: text/html; charset=utf-8');
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Formdan gelen verileri al
$kullanici = $_POST['userName'];
$sifre = $_POST['password'];

// Kontrol
if ($kullanici == $sifre) {
    echo "<h2 style='text-align:center; margin-top:50px;'>Hoşgeldiniz, $sifre </h2>";
    //buraya index.html'e geri dönme yolu ekle
} else {
    echo "<h2 style='text-align:center; margin-top:50px;'>Kullanıcı adı veya şifreniz hatalı, lütfen tekrar deneyiniz.</h2>";

    // 3 saniye sonra giriş sayfasına yönlendirir
    echo "<script>
        setTimeout(function() {
            window.location.href = 'giris.html';
        }, 3000);
    </script>";
}
?>