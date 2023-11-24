const bakiye = document.getElementById("bakiye");
const gelenMiktar = document.getElementById("gelen-miktar");
const gidenMiktar = document.getElementById("giden-miktar");
const islemler = document.getElementById("islemler");
const form = document.getElementById("form");
const islemAdi = document.getElementById("islem_Adi");
const miktar = document.getElementById("miktar");

const temsiliİslemler = [
  { id: 1, islem_adi: "Ayakkabi", miktar: -1000 },
  { id: 2, islem_adi: "Maaş", miktar: 10000 },
  { id: 3, islem_adi: "Araba Bakimi", miktar: -2500 },
  { id: 4, islem_adi: "Kira", miktar: -4000 },
];

let yapilanIslemler = temsiliİslemler;

//temsili verilerin ekrana yazdrılması
function islemlerinEkranaYazdirilmasi(islem) {
  const isaret = islem.miktar > 0 ? "+" : "-";

  const listeIslemi = document.createElement("li");

  listeIslemi.classList.add(islem.miktar > 0 ? "gelir" : "gider");

  listeIslemi.innerHTML = ` 
    <span> ${islem.islem_adi}</span>
    <span> ${isaret}${Math.abs(islem.miktar)}</span>
    <button class= "sil-btn" onClick ="islemKaldir(${islem.id})">X</button>

    `;
  islemler.appendChild(listeIslemi);
}

function init() {
  islemler.innerHTML = "";
  yapilanIslemler.forEach(islemlerinEkranaYazdirilmasi);
  guncelle();
}

init();

function guncelle() {
  const miktarlar = yapilanIslemler.map((islem) => islem.miktar);

  bakiye.innerHTML = miktarlar.reduce((acc, value) => (acc += value), 0);

  gelenMiktar.innerHTML = miktarlar
    .filter((miktar) => miktar > 0)
    .reduce((acc, val) => (acc += val), 0);

  gidenMiktar.innerHTML = miktarlar
    .filter((miktar) => miktar < 0)
    .reduce((acc, val) => (acc += val), 0);

  console.log(miktarlar);
}

form.addEventListener(
  "submit",

  function islemEkle(e) {
    e.preventDefault();

    if (islemAdi.value.trim() === "" && miktar.value.trim() === "") {
      alert("Lütfen İşlem Ve Miktar Bilgilerini Eksiksiz Giriniz");
    } else {
      const yeniIslem = {
        id: idUret(),
        islem_adi: islemAdi.value,
        miktar: +miktar.value,
      };
      yapilanIslemler.push(yeniIslem);
      islemlerinEkranaYazdirilmasi(yeniIslem);
      guncelle();
    }
  }
);

function idUret() {
  return Math.floor(Math.random() * 1000000);
}

function islemKaldir(id) {
  yapilanIslemler = yapilanIslemler.filter((islem) => islem.id !== id);
  init();
}
