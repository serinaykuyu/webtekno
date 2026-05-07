<?php
header("Content-Type: text/html; charset=utf-8");

// Gelen POST verilerini kontrol et
if (empty($_POST)) {
    echo "<h2 style='text-align:center; margin-top:50px;'>Veri alınamadı.</h2>";
    echo "<script>
        setTimeout(function() {
            window.location.href = 'iletisim.html';
        }, 3000);
    </script>";
    exit;
}

$fields = [
    'adSoyad', 'email', 'parola', 'yas', 'telefon', 'tarih', 'bilgilendirme',
    'memnuniyet', 'renk', 'konuSecimi', 'cinsiyet', 'ilgiler', 'saat'
];

echo "<h2 style='text-align:center; margin-top:50px;'>Form Verileriniz</h2>";
echo "<div style='width:400px; margin:0 auto; font-family: Arial, sans-serif;'>";

foreach ($fields as $field) {
    $value = $_POST[$field] ?? '---';

    // Dizi ise (checkbox vb.)
    if (is_array($value)) {
        $value = implode(', ', $value);
    }

    echo "<p><strong>" . ucfirst($field) . ":</strong> " . htmlspecialchars($value) . "</p>";
}

echo "</div>";

echo "<script>
    setTimeout(function() {
        window.location.href = 'iletisim.html';
    }, 5000);
</script>";
?>