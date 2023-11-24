//!pcye 1-20 arasında sayı tutturduk
let rastgeleSayi = Math.ceil(Math.random() * 20);
console.log(rastgeleSayi);

let mesaj = document.querySelector(".msg");

let skor = 10;

let enYuksekSkor = localStorage.getItem("top-score") ||  0;

document.querySelector(".top-score").textContent=enYuksekSkor

//! her check butonuna basıldığında yapılacaklar:
document.querySelector(".check").addEventListener("click", () => {
  const tahmin = document.querySelector(".guess").value;
  // tahmin girmeden butona basıldıysa
  if (!tahmin) {
    mesaj.textContent = "Lütfen Sayı (1-20) Arasında Giriniz!";
  } else if (tahmin == rastgeleSayi) {
    // tahmin doğruysa
    mesaj.textContent = "Tebrikler Bildiniz!";
    document.querySelector("body").style.backgroundColor = "crimson";
    document.querySelector(".number").textContent = rastgeleSayi;

    //top score kontrolü
    if (skor > enYuksekSkor) {
        localStorage.setItem("top-score", skor)
        enYuksekSkor = skor;
        document.querySelector(".top-score").textContent = enYuksekSkor;
    }

    //tahmin yanlışsa
  } else {
    //? skor 1 den büyük olduğu sürece tahmin hakkım var
    if (skor > 1) {
      skor--;
      document.querySelector(".score").textContent = skor;
      tahmin < rastgeleSayi
        ? (mesaj.textContent = "Artır")
        : (mesaj.textContent = "Azalt");
    } else {
      mesaj.textContent = "Oyunu Kaybettiniz";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = " Blue";
    }

    //oyunu kaybettiniz
  }
});
 //? Agan Butonuna Basıldığında ayarlar başlangıç değerlerie kurulun.Arkaplan #2d3436 olsun

 document.querySelector(".again").onclick = ()=>{
    document.querySelector("body").style.backgroundColor= "#2d3436"
    rastgeleSayi =Math.ceil(Math.random() * 20);
    console.log(rastgeleSayi);
    skor=10;
    document.querySelector(".score").textContent= skor
    document.querySelector(".number").textContent= "?"
    document.querySelector(".guess").value =""
    mesaj.textContent="Oyun Yeni Oyuncu İçin Başlıyor..."
 }

 //! enter 
  // Klavyeden enter tuşuna basıldığında check butonunu tetikle

  document.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        // enter tuşuna basıldığında check butonuna tıkla
        document.querySelector(".check").click()
    }
  });

  document.querySelector(".check").addEventListener("click", ()=>{
    tahmin=document.querySelector(".guess").value

    const tahminSayi =parseInt(tahmin);
    if (tahminSayi >=1 && tahminSayi<= 20 && !isNaN(tahminSayi)) {
        // doğru sayi girilmişse onu devam ettirir
    } else {
        mesaj.textContent ="Geçersiz bir sayı girdiniz  lütfen 1-20 arasında bir sayı giriniz"
        skor ++
    }
  })