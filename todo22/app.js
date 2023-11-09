
let yeniGorev = document.getElementById("yeniGorev")
let gorevListesi = document.getElementById("gorevListesi");

// let li = document.createElement("li");
// let tick = document.createElement("i");
// let deleteIcon = document.createElement("i");
// let gorevText = document.createElement("span");
// let completed = false; 


function gorevEkle() {
let yeniGorev = document.getElementById("yeniGorev").value;
if (!yeniGorev ) {
   alert("Boş bir görev ekleyemezsiniz.");
} else {
 let li = document.createElement("li");
 let tick = document.createElement("i");
 let deleteIcon = document.createElement("i");
 let gorevText = document.createElement("span");
 let completed = false; 

   li.classList.add("animate");
   tick.classList.add( "fas", "fa-light", "fa-circle-check","tick");
   deleteIcon.classList.add("fas", "fa-trash", "fa-danger","delete");
   deleteIcon.style.color= "orange";
   tick.style.color="#0000ff";
   gorevText.textContent = yeniGorev;

   tick.addEventListener("click", function() {
       completed = !completed;
       li.classList.toggle("completedX", completed);
       tick.classList.toggle("fa-check-square", completed);
       tick.classList.toggle("fa-square", !completed);
   });

   deleteIcon.addEventListener("mouseout", function() {
       li.remove();
   });

li.appendChild(tick);
   li.appendChild(gorevText);
li.appendChild(deleteIcon);

//    li.addEventListener("animationend", function() {
//        li.classList.remove("animate");
//    });

   gorevListesi.prepend(li);
   document.getElementById("yeniGorev").value = "";
}
}


// document.getElementById("yeniGorev").addEventListener("keyup", function(event) {
//   if (event.key === "Enter") {
//       gorevEkle();
//   }
// });

// 

// 