let index = 0;
// let colors = ["red", "blue", "orange", "yellow", "green", "purple"];
function changeColors(){
    const colors = ["red","blue","orange","yellow","green","purple"];

    document.getElementsByTagName("body")[0].style.background=colors[index++];

    if(index > colors.length-1)
    index =0 ;
    
}


