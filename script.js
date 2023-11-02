// /* -------------------------------------------------------------------------- */
// /*                       FUNCTIONLAR                                          */
// /* -------------------------------------------------------------------------- */
// // function merhaba(name, age){

// // if(typeof name === "undefined") name = "Bilgi Yok";
// // if(typeof age === "undefined") age= "Bilgi Yok";

// //     console.log(`İsim ${name} Yaş:${age}`);
// // }

// // merhaba("Murat", 25);    //  Fonksiyon Çağrısı
// // merhaba("Ayşe", 25);
// // merhaba(25,"Mehmet");
// // merhaba();



// // function merhaba(name = "Bilgi Yok", age= "Bilgi Yok"){

// //             console.log(`İsim ${name} Yaş:${age}`);
// //     }

// //     merhaba("Murat", 25);    //  Fonksiyon Çağrısı
// //     merhaba("Ayşe", 25);
// //     merhaba(25,"Mehmet");
// //     merhaba();

// //? function merhaba() {
// //?     console.log("Merhaba")  
        // FONKSİYON ÇALIŞTIĞINDA ÇALIŞMASINI İSTEDİĞİMİZ KOMUT BU
        // BİR KOMUTTA YAZILABİLİR BİRDEN FAZLA KOMUTTA YAZILABİLİR.(SCOPE İÇİNE)
        // BUNU BU ŞEKİLDE OLUŞTURMAK ÇALIŞACAĞI ANLAMINA GELMİYOR.
        // "MERHABA" İSMİNDEKİ FONKSİYONUMUZU ÇALIŞTIRMAK İÇİN FONKSİYON ÇAĞIRMA DEDİĞİMİZ "FUNCTİON CALL "
        //... DEDİĞİMİZ İŞLEMİ YAPMAMIZ GEREKMEKTEDİR."FUNCTİON CALL ALT SATIRDA YAZAN İŞLEMDİR."
//? }
// //? merhaba();                
                           // BUNU YAPTIĞIMIZ/YAZDIĞIMIZ ZAMAN BU FONKSİYONU ÇALIŞTIR DEMİŞ OLUYORUZ.
                           // PROGRAM ÜSTTEKİ YAZAN "merhaba" YA GİDİYOR.PROGRAM ORAYA GİTTİKTEN SONRA
                           // ...ALTINDAKİ KOMUTLARI ÇALIŞTIRIYOR.FARKLI FARKLI YERLERDE "merhaba()" YAZARAK FONKSİYONU
                           //... İSTEDİĞİMİZ YERLERDE ÇALIŞTIRMAK MÜMKÜN.

// function merhaba(name, age){  // İÇİNE PARAMETRE ("name,age") vb. KOYABİLİYORUZ

// console.log(`İsim: ${name} Yaş:${age}`);

// }

// merhaba("Mesut", 41);
// merhaba("Pınar",38);
// merhaba("Ümit", 11);

// /* -------------------------------------------------------------------------- */
// /*                               Function-Return                              */

// function yasHesapla(dogumYili){

//     return 2023-dogumYili;
    
// }
// // yasHesapla(1981);
// // console.log(yasHesapla(1990));

// let ageMesut= yasHesapla(1990);
// let ageMehmet= yasHesapla(2000);
// let ageCagla= yasHesapla(2005);

// // console.log(ageMesut);
// // console.log(ageMehmet);
// // console.log(ageCagla);

// function ehliyetAlabilmeDurumu(dogumYili, isim){
//     let yas= yasHesapla(dogumYili);
//     let ehliyet = 18- yas ;
//     if(ehliyet>0){
//         console.log(`${isim} ehliyet alabilmenize ${ehliyet} yıl kaldı`);
//       }else{

//         console.log("Ehliyet alabilirsiniz");
//       } 
 
// }
// ehliyetAlabilmeDurumu(2010,"Esra");

// var kullanici="global scope"
// if(true){

//   var kullanici= "if scope: yasin"
// }
// console.log(kullanici)

// veri = window;

// console.log(veri);

// //alert
// alert("Merhaba"); 
// // promt

// var veri2 = prompt("Adınızı Giriniz");

// veri3 = confirm("Çıkmak İstediğinizden Emin misiniz?")

// if(veri3){

//   console.log("çıkış gerçekleşti")

// }else {
//   console.log("çıkış gerçekleşmedi..!")
// }
// // console.log(veri3);
 //location

 veri= window.location.href ;
 veri= window.location.hostname ;
 veri= window.location.protocol ;
 


 console.log(veri);


