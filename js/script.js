navbarToggler.onclick = () => {
    navbarCollapse.classList.toggle("show-overlay");
}
navbarClose.onclick = () => {
    navbarCollapse.classList.toggle("show-overlay");
}

let slideIndex = [1,1];
let slideId = ["skills-grid", "projects-grid"];
showSlides(1, 0);
showSlides(1, 1);
function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}
function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {slideIndex[no] = 1}
    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
}
    x[slideIndex[no]-1].style.display = "grid";
}
PreSkillsArrow.onclick = () => { plusSlides(-1, 0); };
NextSkillsArrow.onclick = () => { plusSlides(1, 0); };
PreProjectsArrow.onclick = () => { plusSlides(-1, 1); };
NextProjectsArrow.onclick = () => { plusSlides(1, 1); };