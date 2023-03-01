let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    console.log(this);
    this.style.borderBottom = "none";
    this.style.backgroundColor = "#2678F3";
})