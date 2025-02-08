//MENU TAB on menu.html
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".tablinks").click();
});
function openMenu(evt, menuName) {
  var i, tabcontent, tablinks;

  // Hide all tab content
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Hide the coffee-menu grid by default
  var coffeeMenu = document.getElementById("coffee-menu");
  var coffee = document.getElementById("coffee");
  var mainCourseMenu = document.getElementById("main-course-menu");
  var mainCourse = document.getElementById("main-course");
  var nonCoffee = document.getElementById("non-coffee");
  var nonCoffeeMenu = document.getElementById("non-coffee-menu");
  var snack = document.getElementById("snack");
  var snackMenu = document.getElementById("snack-menu");
  if (coffeeMenu) {
    coffeeMenu.style.display = "none";
    coffee.style.display = "none";
  } else if (mainCourseMenu) {
    mainCourseMenu.style.display = "none";
    mainCourse.style.display = "none";
  } else if (nonCoffeeMenu) {
    nonCoffeeMenu.style.display = "none";
    nonCoffee.style.display = "none";
  } else if (snackMenu) {
    snackMenu.style.display = "none";
    snack.style.display = "none";
  }

  // Remove active class from all buttons
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show the selected tab content
  var selectedTab = document.getElementById(menuName);
  if (selectedTab) {
    selectedTab.style.display = "block";
  }

  // If the coffee tab is active, show the coffee-menu grid
  if (menuName === 'coffee') {
    if (coffeeMenu) {
      coffeeMenu.style.display = "grid";
      coffee.style.display = "grid";
    }
  } else if (menuName == 'main-course') {
    if (mainCourseMenu) {
      mainCourseMenu.style.display = "grid";
      mainCourse.style.display = "grid";
    }
  } else if (menuName == 'non-coffee') {
    if (nonCoffeeMenu) {
      nonCoffeeMenu.style.display = "grid";
      nonCoffee.style.display = "grid";
    }
  } else if (menuName == 'snack') {
    if (snackMenu) {
      snackMenu.style.display = "grid";
      snack.style.display = "grid";
    }
  }

  // Add active class to the clicked button
  evt.currentTarget.classList.add("active");
}

//SWIPER FOR CUSTOMER REVIEW ON index.html
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
}

const swiper = new Swiper('.vertical-slide-carousel', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

