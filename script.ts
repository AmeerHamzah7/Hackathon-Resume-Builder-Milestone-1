const ibutton = document.querySelector(".toggleBtn") as HTMLButtonElement;
const skills = document.querySelector(".skills") as HTMLElement;

ibutton.addEventListener("click", () => {
    if (skills.style.display === "none") {
      skills.style.display = "block";
    } else {
      skills.style.display = "none";
    }
  });