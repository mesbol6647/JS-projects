const searchBtn = document.querySelector("#button");
// console.log(searchBtn);
const searchInput =document.querySelector("#searchFollowers");
const cardsDiv =document.getElementById("cards");

//+https://api.github.com/users/mesbol6647/followers?per_page=100

const getFollowers = async (username) =>{
    cardsDiv.innerHTML ="";
    try {
        const res = await fetch(`https://api.github.com/users/${username}/followers?per_page=100`);
        if (res.ok) {
            const data = await res.json()
            console.log(data);
            data.forEach(item => createElem(item));     
          
        }else{
            cardsDiv.innerHTML = `<h1>Kullanıcı Bulunamadı</h1>`
        }
        const data = await res.json();
    } catch (error) {
        
    }
}
getFollowers("mesbol6647")
const createElem = (user) => {
    // console.log(user);
    const {login, html_url, avatar_url} =user;
    // console.log(login);
    const newElem = `
    <div class="col">
        <div class="card">
        <img src="${avatar_url}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${login}</h5>
            <a href="${html_url}" target="_blank" class="btn btn-dark">View Profile</a>
        </div>
        </div>
    </div>
    `;
    cardsDiv.innerHTML +=newElem;
};


searchBtn.addEventListener("click", ()=>{
    const value = document.getElementById("searchText").value;
    console.log(value);
    if(value.trim){
        getFollowers(value)
    }else{
        alert("Lütfen bir kullanıcı adı giriniz!")
    }
});
 searchInput.addEventListener("input", (e)=>{


 });
