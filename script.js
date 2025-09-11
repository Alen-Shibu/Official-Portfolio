// -----About Section Js-----

const tablinks = document.querySelectorAll(".tab-links");
const tabcontents = document.querySelectorAll(".tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.target.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// -----Services Modal Js-----

const openButtons = document.querySelectorAll(".open");
const closeButtons = document.querySelectorAll(".close");

// Open modal
openButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const modalId = btn.getAttribute("data-modal");
    document.getElementById(modalId).classList.add("show");
  });
});

// Close modal
closeButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    btn.closest(".modal-container").classList.remove("show");
  });
});

// Close on outside click
document.querySelectorAll(".modal-container").forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });
});

// -----Sidebar Js-----
const menu_icon = document.getElementById("menu-icon");
const navbar = document.getElementById("nav");

menu_icon.onclick = ()=>{
  navbar.classList.toggle("active");
  menu_icon.classList.toggle("fa-xmark");
}

document.addEventListener('click',(e)=>{
  if((!navbar.contains(e.target))&&(!menu_icon.contains(e.target))){
  navbar.classList.remove("active");
  menu_icon.classList.remove("fa-xmark");
  }
})