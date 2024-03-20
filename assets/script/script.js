// Nav bar
const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");
const menu = document.querySelector(".nav-bar");
const listClose = document.querySelectorAll(".link-tab");

// Function to toggle menu visibility
function toggleMenu() {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 530) {
    if (menu.classList.contains("nav-show")) {
      openMenu.style.display = "none";
      closeMenu.style.display = "block";
    } else {
      openMenu.style.display = "block";
      closeMenu.style.display = "none";
    }
  } else {
    openMenu.style.display = "none";
    closeMenu.style.display = "none";
  }
}
toggleMenu();

// Event listeners
openMenu.addEventListener("click", () => {
  menu.classList.add("nav-show");
  toggleMenu();
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("nav-show");
  toggleMenu();
});

listClose.forEach((listClose) => {
  listClose.addEventListener("click", function () {
    menu.classList.remove("nav-show");
    toggleMenu();
  });
});

// Listen for window resize event
window.addEventListener("resize", toggleMenu);


//home carousel
const carouselItems = document.querySelectorAll(".carousel-item");
let currentIndex = 0;

function showSlide(index) {
  // Hide all carousel items
  carouselItems.forEach((item) => {
    item.style.display = "none";
  });

  // Show the slide at the specified index
  carouselItems[index].style.display = "block";
}
/*                             expalanation   
Suppose currentIndex is currently 1 (indicating the second slide), and there are 3 slides in total (carouselItems.length is 3).
When you click the next button, currentIndex + 1 becomes 2, indicating that you want to move to the next slide.
Since carouselItems.length is 3, taking 2 % 3 gives the remainder 2. So, the next slide index remains 2.
If you click next again, currentIndex becomes 3. But 3 % 3 equals 0, so the next slide index wraps around to 0, indicating the first slide.
This ensures that the carousel loops back to the beginning after reaching the last slide, creating a continuous loop of slides. */
function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showSlide(currentIndex);
}

function previousSlide() {
  currentIndex =
    (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showSlide(currentIndex);
}

// Show the first slide initially
showSlide(currentIndex);

// Set up event listeners for next and previous buttons
document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", previousSlide);

// Show table
const table_1 = document.querySelector(".table-1");
const table_2 = document.querySelector(".table-2");
const table_3 = document.querySelector(".table-3");

const tb_btn_1 = document.getElementById("bt-1");
const tb_btn_2 = document.getElementById("bt-2");
const tb_btn_3 = document.getElementById("bt-3");

tb_btn_1.addEventListener("click", () => {
  table_1.classList.add("box-visible");
  if (table_2.classList.contains("box-visible")) {
    table_2.classList.remove("box-visible");
  } else if (table_3.classList.contains("box-visible")) {
    table_3.classList.remove("box-visible");
  }
});
tb_btn_2.addEventListener("click", () => {
  table_2.classList.add("box-visible");
  if (table_1.classList.contains("box-visible")) {
    table_1.classList.remove("box-visible");
  } else if (table_3.classList.contains("box-visible")) {
    table_3.classList.remove("box-visible");
  }
});
tb_btn_3.addEventListener("click", () => {
  table_3.classList.add("box-visible");
  if (table_2.classList.contains("box-visible")) {
    table_2.classList.remove("box-visible");
  } else if (table_1.classList.contains("box-visible")) {
    table_1.classList.remove("box-visible");
  }
});

const testimonialItem = document.querySelectorAll(".testimonials");
let testCurrentIndex = 0;

function testShowSlide(index) {
  testimonialItem.forEach((item) => {
    item.style.display = "none";
  });
  testimonialItem[index].style.display = "block";
}
function testNextSlide() {
  testCurrentIndex = (testCurrentIndex + 1) % testimonialItem.length;
  testShowSlide(testCurrentIndex);
}
function testPreviousSlide() {
  testCurrentIndex =
    (testCurrentIndex - 1 + testimonialItem.length) % testimonialItem.length;
  testShowSlide(testCurrentIndex);
}
testShowSlide(testCurrentIndex);
document.getElementById("nextBtnTwo").addEventListener("click", testNextSlide);
document
  .getElementById("backBtnTwo")
  .addEventListener("click", testPreviousSlide);

// nav bar show up
function scrollHeader() {
  const header = document.querySelector(".nav-bar");
  if (window.scrollY >= 130) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

// Event listener for scroll
window.addEventListener("scroll", scrollHeader);
