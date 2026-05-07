function submitWithJS() {  //js ile gönder butonuna basıldığında bu fonksiyon çalıştırılır
    const formElement = document.getElementById('iletisimForm');
    let hatalar = [];
    
    // Değerleri okuma
    let adSoyad = document.getElementById('adSoyad').value.trim();
    let email = document.getElementById('email').value.trim();
    let telefon = document.getElementById('telefon').value.trim();

    // 1. Boşluk Kontrolü
    if (adSoyad === "") {
        hatalar.push("Ad Soyad alanı boş bırakılamaz.");
    }

    // 2. E-mail Format Kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        hatalar.push("Lütfen eposta bilginizi giriniz.");
    }
    else if(!emailRegex.test(email)){
        hatalar.push("Lütfen eposta bilginizi doğru formatta girin.");
    }

    // 3. Telefon Rakam Kontrolü
    const telefonRegex = /^[0-9]+$/;
    if (telefon === "") {
        hatalar.push("Lütfen telefonunuzu giriniz.");
    }
    else if(!telefonRegex.test(telefon)){
        hatalar.push("Lütfen girmiş olduğunuz telefon numarasının sadece numaralardan oluştuğuna emin olun.");
    }

    // Sonuç
    if (hatalar.length > 0) {
        alert("Eksik veya hatalı bilgiler bulunmuştur:\n\n" + hatalar.join("\n"));
    } else {
        alert("Girdiğiniz bilgiler gönderiliyor.");
        formElement.submit(); 
    }
}