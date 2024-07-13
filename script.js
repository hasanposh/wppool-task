const TOP_OFFSET = 78;
const navbar = document.getElementById("navbar");
const logo1 = document.getElementById("logo1");
const logo2 = document.getElementById("logo2");
const share = document.getElementById("share");
const menu = document.getElementById("menu");
const shareBtn = document.getElementById("shareBtn");
const reportBtn = document.getElementById("reportBtn");
const menuContainer = document.getElementById('menu-container');
const menuCross = document.getElementById('menu-cross');

window.addEventListener("scroll", () => {
  if (window.scrollY >= TOP_OFFSET) {
    navbar.classList.add("bg-[#F3F3F3]", "text-black");
    navbar.classList.remove("bg-opacity-0");
    logo1.classList.add("hidden");
    logo2.classList.remove("hidden");
    share.classList.add("filter-invert-100");
    menu.classList.add("filter-invert-100");
    shareBtn.classList.add("border-[#AFCD80]");
    reportBtn.classList.add("text-black", "border-[#115CD9]");
    reportBtn.classList.remove("text-white");
  } else {
    navbar.classList.remove("bg-[#F3F3F3]");
    navbar.classList.add("bg-opacity-0");
    logo1.classList.remove("hidden");
    logo2.classList.add("hidden");
    share.classList.remove("filter-invert-100");
    menu.classList.remove("filter-invert-100");
    shareBtn.classList.remove("border-[#AFCD80]");
    reportBtn.classList.remove("border-[#115CD9]");
    reportBtn.classList.add("text-white");

  }
});

menu.addEventListener('click', () => {
    menuContainer.classList.toggle('hidden');
    setTimeout(() => {
        menuContainer.classList.toggle('active');
    }, 10); // small delay to ensure transition effect
});

menuCross.addEventListener('click', () => {
    menuContainer.classList.toggle('active');
    setTimeout(() => {
        menuContainer.classList.toggle('hidden');
    }, 300); // match the transition duration
});