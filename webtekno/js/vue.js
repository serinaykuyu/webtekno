const { createApp } = Vue;

createApp({
  data() {
    return {
      formData: {
        adSoyad: '',
        email: '',
        parola: '',
        yas: '',
        telefon: '',
        tarih: '',
        bilgilendirme: '',
        memnuniyet: '50',
        renk: '#000000',
        konuSecimi: 'genel',
        cinsiyet: '',
        ilgiler: [],
        saat: ''
      }
    };
  },
  methods: {
    submitWithVue(event) {
      let hatalar = [];
      
      // Boşluk kontrolü
      if (!this.formData.adSoyad || this.formData.adSoyad.trim() === '') {
        hatalar.push("Ad Soyad alanı boş bırakılamaz.");
      }
      
      // Email format kontrolü
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.formData.email) {
        hatalar.push("Lütfen eposta bilginizi girin.");
      }
      else if(!emailRegex.test(this.formData.email)){
        hatalar.push("Lütfen eposta bilginizi doğru formatta girin.");
      }
      
      // Telefon numara kontrolü (Sadece rakam)
      const telefonRegex = /^[0-9]+$/;
      if (!this.formData.telefon) {
        hatalar.push("Lütfen telefonunuzu giriniz.");
      }
      else if(!telefonRegex.test(this.formData.telefon)){
        hatalar.push("Lütfen girmiş olduğunuz telefon numarasının sadece numaralardan oluştuğuna emin olun.");
      }

      // Hata Varsa Durdur, Yoksa Gönder
      if (hatalar.length > 0) {
        alert("Eksik veya hatalı bilgiler bulunmuştur:\n\n" + hatalar.join("\n"));
      } else {
        alert("Girdiğiniz bilgiler gönderiliyor.");
        this.$refs.formElement.submit(); 
      }
    },
    temizleForm() {
      this.formData = {
        adSoyad: '', email: '', parola: '', yas: '', telefon: '',
        tarih: '', bilgilendirme: '', memnuniyet: '50', renk: '#000000',
        konuSecimi: 'genel', cinsiyet: '', ilgiler: [], saat: ''
      };
      const dosyaInput = document.getElementById('dosya');
      if (dosyaInput) dosyaInput.value = "";
    }
  }
}).mount('#app');