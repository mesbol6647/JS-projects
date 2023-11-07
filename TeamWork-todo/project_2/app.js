const checkboxes = document.querySelectorAll("input[type=checkbox]");
const gorevTexts = document.querySelectorAll(".gorev-text");

checkboxes.forEach(function(checkbox, index) {
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            gorevTexts[index].style.textDecoration = "line-through";
            gorevTexts[index].style.color = "black";
        } else {
            gorevTexts[index].style.textDecoration = "none";
            gorevTexts[index].style.color = "black";
        }
    });
});