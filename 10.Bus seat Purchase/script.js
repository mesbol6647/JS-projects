//oturma düzeni,seçilecek koltukların buklunduğu kısım
const oturmaDuzeni =document.querySelector(".oturma_duzeni")

// oturma düzeni içerisinde yer alan koltuklar

const koltuklar =document.querySelectorAll(".oturma_duzeni .koltuk:not(.dolu)") 


// yolcu tipi

const yolcuTipi= document.getElementById("yolcuTipi")


// Bilet Adedi
const biletAdedi = document.getElementById("adet")


// tutar
 const tutar = document.getElementById("tutar")

 // Bilet Fiyatı
  let biletFiyati =  +yolcuTipi.value



 oturmaDuzeni.addEventListener("click", (e)=>{
   if(e.target.classList.contains("koltuk") && !e.target.classList.contains("dolu")){
    e.target.classList.toggle("secilmis")

    console.log(e.target);
   }


   secimiGuncelle()
 })

 yolcuTipi.addEventListener("change", ()=> {

    biletFiyati =  +yolcuTipi.value

   secimiGuncelle()
 })



 const secimiGuncelle = () =>{
    const secilmisKoltuklar = document.querySelectorAll
    (".oturma_duzeni .koltuk.secilmis")


    adet.innerText = secilmisKoltuklar.length
    tutar.innerText = secilmisKoltuklar.length * biletFiyati
    
 }
