const query = document.querySelector("#query");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("mouseover", function() {
    query.style.width = "300px";
    query.style.transitionDuration = "1s";
    query.style.border = "2px solid rgba(0, 0, 0, 0.2)";
    query.style.outline = "none";

})
query.addEventListener("focus", function() {
    searchBtn.style.visibility = "hidden";

})
query.addEventListener("focusout", function() {
    query.style.width = "35px";
    query.style.transitionDuration = "1s";
    query.style.border = "none";
    searchBtn.style.visibility = "visible";
    query.style.backgroundColor = "transparent";
})