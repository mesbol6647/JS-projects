//selectors

const ekleBtn = document.getElementById("ekle-btn");
const gelirInput = document.getElementById("gelir-input");
const ekleFormu = document.getElementById("ekle-formu");
//Hesap Tablosu Selectors

const gelirinizTd = document.getElementById("geliriniz");
const giderinizTd = document.getElementById("gideriniz");
const kalanTd = document.getElementById("kalan");
const kalanTh =document.getElementById("kalanTh")

// Harcama Formu Selectors

const harcamaFormu = document.getElementById("harcama-formu");
const harcamaAlaniInput = document.getElementById("harcama-alani");
const tarihInput = document.getElementById("tarih");
const miktarInput = document.getElementById("miktar");

// Harcama Tablosu Selectors

const harcamaBody = document.getElementById("harcama-body");
const temizleBtn = document.getElementById("temizle-btn");

//variables

let gelirler = 0;
let harcamaListesi = [];

// Ekle Formu

ekleFormu.addEventListener("submit", (e) => {
  e.preventDefault();
  gelirler = gelirler + Number(gelirInput.value);
  console.log(gelirler);
  localStorage.setItem("gelirler", gelirler);
  gelirinizTd.innerText = gelirler;
  ekleFormu.reset();
  hesaplaVeGuncelle()
});

window.addEventListener("load", () => {
  gelirler = Number(localStorage.getItem("gelirler")) || 0;
  gelirinizTd.innerText = gelirler;
  tarihInput.valueAsDate = new Date();
  harcamaListesi =JSON.parse(localStorage.getItem("harcamalar")) || []


  harcamaListesi.forEach((harcama) => harcamayiDomaYaz(harcama))
  hesaplaVeGuncelle()
    
  
});

harcamaFormu.addEventListener("submit", (e) => {
  //form girişleri objeye oradan arraye dönüştürecez.
  e.preventDefault();
  const yeniHarcama = {
    id: new Date().getTime(),
    // tarih: tarihInput.value,
    tarih:new Date (tarihInput.value).toLocaleDateString(),
    alan: harcamaAlaniInput.value,
    miktar: miktarInput.value,
  };

  // console.log(yeniHarcama);
  harcamaFormu.reset();
  tarihInput.valueAsDate = new Date();

  harcamaListesi.push(yeniHarcama);
  localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi))
  harcamayiDomaYaz(yeniHarcama)
  hesaplaVeGuncelle()
});

//harcamayı Doma Yazmak
const harcamayiDomaYaz = ({ id, miktar, tarih, alan})=>{
   

    // const { id, miktar, tarih, alan} = yeniHarcama
    // console.log(id, miktar, tarih, alan);
    // harcamaBody.innerHTML+= `
    // <tr>

    // <td>${tarih}</td>
    // <td>${alan}</td>
    // <td>${miktar}</td>
    // <td><i id=${id} class="fa-solid fa-trash-can text-danger"  type="button"></i></td>
    // </tr>
    
    // ` //!1.yöntem innerHTML ile tercih edilmez

    const tr =document.createElement("tr");
   

    const appendTd = (content)=>{
        const td = document.createElement("td");
        td.textContent =content;
        return td;
    }

    const createLastTd= ()=>{
        const td = document.createElement("td");
        const iElement = document.createElement("i");
        iElement.id = id;
        iElement.className ="fa-solid fa-trash-can text-danger"
        iElement.type = "button";
        td.appendChild(iElement);
        return td;

    }

    tr.append(
        appendTd(tarih),
        appendTd(alan),
        appendTd(miktar),
        createLastTd()
    )

 
        harcamaBody.append(tr) //harcamayı sona ekler
        //! harcamaBody.prepend(tr)  -----harcamayı öne ekler
        



}


const hesaplaVeGuncelle = ()=>{
    gelirinizTd.innerText = gelirler 
    //gider toplamını bul
    const giderler = harcamaListesi.reduce(
        (toplama,harcama) => toplama + Number(harcama.miktar),0
    )


        giderinizTd.innerText =giderler // gider toplamını ekrana yaz
        kalanTd.innerText = gelirler - giderler


        const borclu = gelirler - giderler < 0;

        kalanTd.classList.toggle("text-danger", borclu)
        kalanTh.classList.toggle("text-danger", borclu)

}

harcamaBody.addEventListener("click", (e)=>{
    if(e.target.classList.contains("fa-trash-can")){
        e.target.parentElement.parentElement.remove()
    }
    //silinen harcamanın id bilgisini alı
    const id = e.target.id

    harcamaListesi = harcamaListesi.filter((harcama => harcama.id != id)) // silinen harcamayı arrayden çıkarır

    localStorage.setItem("harcamalar",JSON.stringify(harcamaListesi)) // yeni arrayi locale update eder

    //silindikten sonra yeniden hesapla
    hesaplaVeGuncelle()


})

temizleBtn.addEventListener("click", ()=>{
    if(confirm("Silmek İstediğinize Emin misiniz?")){
        harcamaListesi=[] // tüm harcamaları siler
        gelirler = 0 // geliri sıfırlar
        // localStorage.clear() // tüm local storage silinir
        localStorage.removeItem("gelirler") // sadece gelirleri siler
        localStorage.removeItem("harcamalar") // sadece harcamaları siler
        harcamaBody.innerHTML = "" // DOMdan harcamalalrı siler
        hesaplaVeGuncelle()
    }
})