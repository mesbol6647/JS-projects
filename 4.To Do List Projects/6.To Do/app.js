function toggleTick(element) {
    element.querySelector(".tick").classList.toggle("active");
    element.style.backgroundColor = element.querySelector(".tick").classList.contains("active") ? "#ae5f75" : "#ccc";
    element.closest(".container").classList.toggle("container-acik");
}
