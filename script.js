var ibutton = document.querySelector(".toggleBtn");
var skills = document.querySelector(".skills");
ibutton.addEventListener("click", function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
