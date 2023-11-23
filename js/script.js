// This is navbar toggle arrow <<
const closeToggleBtn = document.getElementById("closeToggleBtn");
const openSideBar = document.getElementById("openSideBar");
const mainContent = document.getElementById("mainContent");
const navbarHeading = document.getElementById("navbarHeading");
closeToggleBtn.addEventListener("click", () => {
    openSideBar.classList.toggle("left-400");
    mainContent.classList.toggle("left-0");
    navbarHeading.classList.toggle("left-0")
    closeToggleBtn.classList.toggle("left-sidebar-toggle-turn");
});
// Show userProfile drop down
const defaultDropdown = document.getElementById("defaultDropdown");
defaultDropdown.addEventListener("click", (event) => {
    const showDropDown = document.getElementById("showDropDown");
    showDropDown.classList.toggle("show");
    event.stopPropagation();
});
document.addEventListener("click", (event) => {
    if (!showDropDown.contains(event.target) && !defaultDropdown.contains(event.target)) {
        showDropDown.classList.remove("show");
    }
})
let hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", (event) => {
    let openSideBar = document.getElementById("openSideBar");
    openSideBar.classList.toggle("left-sidebar-open");
    event.stopPropagation(); // Prevent the click event from reaching the document
});

document.addEventListener("click", (event) => {
    // Check if the clicked element is outside the sidebar
    if (!openSideBar.contains(event.target) && !hamburger.contains(event.target)) {
        openSideBar.classList.remove("left-sidebar-open");
    }
});
