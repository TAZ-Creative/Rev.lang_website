"use strict";

/* 
 1.⁠ ⁠Set language of translateFrom
 2.⁠ ⁠translateTo language is always English
 3.⁠ Pick random word from word array. This random word is q.
 4.⁠ ⁠Display Random word.
 5.⁠ ⁠See Meaning button translates text.
 6.⁠ ⁠Display Translation.
*/

function classToggle() {
  const navItems = document.querySelectorAll(".navbar__items");
  navItems.forEach((navItem) => navItem.classList.toggle("navbar__ToggleShow"));
}

const navbarLink = document.querySelector(".navbar__Link-toggle");
navbarLink.addEventListener("click", classToggle);

/*=======SCRIPT FOR TESTIMONIAL CAROUSEL=====*/
const testimonials = [
  {
    name: "Mateen Damola",
    testimonial:
      " I think this is the application language learners are waiting for. It complements my learning. Since I can already construct simple sentences, and all I need to know is verbs and names of things in the other language.",
    image: "assets/images/img-1.jpg",
  },
  {
    name: "Iman Gbadamosi",
    testimonial:
      " I have no doubt that language learners will find this helpful. I am impressed with the fact that it includes a gallery in case you want to feed your eyes. Thank you creating this.",
    image: "assets/images/img-3.jpeg",
  },
  {
    name: "Hisham Heddad",
    testimonial:
      " This app was my companion in space. I spoke with a lot of Africans I met there without any issues. Thank you for creating something this great.",
    image: "assets/images/img-2.jpeg",
  },
];

let currentTestimonialIndex = 0;
const totalTestimonials = testimonials.length;

const testimonialContainer = document.querySelector(".testimonials--container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const imgContainer = document.querySelector(".img-container img");
const nameElement = document.querySelector(".text--description h4");
const testimonialElement = document.querySelector(".text--description p");

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % totalTestimonials;
    displayCurrentTestimonial();
    console.log("next button clicked");
  });
}
if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % totalTestimonials;
    displayCurrentTestimonial();
    console.log("next button clicked");
  });
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    currentTestimonialIndex =
      (currentTestimonialIndex - 1 + totalTestimonials) % totalTestimonials;
    displayCurrentTestimonial();
  });
}
if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    currentTestimonialIndex =
      (currentTestimonialIndex - 1 + totalTestimonials) % totalTestimonials;
    displayCurrentTestimonial();
  });
}

function displayCurrentTestimonial() {
  const currentTestimonial = testimonials[currentTestimonialIndex];

  if ((imgContainer, nameElement, testimonialContainer)) {
    imgContainer.src = currentTestimonial.image;
    nameElement.textContent = currentTestimonial.name;
    testimonialElement.textContent = currentTestimonial.testimonial;
  }
}

window.onload = displayCurrentTestimonial;
/*=======SCRIPT FOR TESTIMONIAL CAROUSEL=====*/

/*=======SCRIPT FOR GALLERY IMAGE SEARCH=====*/
const accessKey = "QcP5MuCZSMYOZtEK5vCnIWe0glPbxDEO52EbbFCJRJ8";
const languageButtons = document.querySelectorAll(".filter-btn");
const searchResultDisplay = document.querySelector(".gallery--wrapper");
const countryName = document.querySelector(".country-name");

let keyword = "";
let page = 1;

async function fetchImages(keyword) {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    // Clear existing search results
    searchResultDisplay.innerHTML = "";

    results.map((result) => {
      const image = document.createElement("img");
      const imageLink = document.createElement("a");
      image.src = result.urls.small;
      imageLink.href = result.links.html;
      imageLink.target = "_blank";

      imageLink.appendChild(image);
      searchResultDisplay.appendChild(imageLink);
    });

    // console.log(results);
  } catch (error) {
    console.error("Error fetching images:", error);
  }
}

// Initial search on page load
fetchImages("Lagos");

// Event handler for button clicks
for (let i = 0; i < languageButtons.length; i++) {
  languageButtons[i].addEventListener("click", async () => {
    let buttonValue = languageButtons[i].value;
    keyword = buttonValue;
    console.log(keyword);
    await fetchImages(keyword);
    if (buttonValue === "Lagos") {
      countryName.textContent = "Yoruba";
    }

    if (buttonValue === "zulu") {
      countryName.textContent = "Zulu";
    }

    if (buttonValue === "Xhosa (South Africa)") {
      countryName.textContent = "Xhosa (South Africa)";
    }

    if (buttonValue === "Hausa") {
      countryName.textContent = "Hausa";
    }
  });
}

/*=======END OF SCRIPT FOR GALLERY IMAGE SEARCH=====*/

/*=========CONTACT PAGE SCRIPT WITH EMAIL JS========*/
emailjs.init("EgrsWVisjrpgLidWI");

const submitBtn = document.querySelector(".submit-btn");
const contactForm = document.getElementById("contact-form");

window.onload = function () {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    submitBtn.textContent = "Sending...";
    const serviceID = "service_0milchf";
    const templateID = "template_5qc19m4";
    // generate a five digit number for the contact_number variable
    this.contact_number.value = (Math.random() * 100000) | 0;
    // these IDs from the previous steps
    emailjs.sendForm(serviceID, templateID, this).then(
      function () {
        console.log("SUCCESS!");
        submitBtn.textContent = "Message sent successfully...";

        contactForm.reset();
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  });
};
/*=========END OF CONTACT PAGE SCRIPT WITH EMAIL JS========*/

/*=========ABOUT PAGE, TAB SCRIPT WITH EMAIL JS========*/
document.addEventListener("DOMContentLoaded", function () {
  // Select the first tab button and trigger a click event
  const firstTabButton = document.querySelector(".tab-btn");
  if (firstTabButton) {
    firstTabButton.click();
  } else {
    console.error("Tab button not found");
  }
});

function tabControl(event, cultureName) {
  let i, tabContent, tabButtons;

  tabContent = document.getElementsByClassName("culture-tab");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  tabButtons = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }

  const selectedTab = document.getElementById(cultureName);
  if (selectedTab) {
    selectedTab.style.display = "block";
    event.currentTarget.classList.add("active");
  } else {
    console.error(`Element with ID ${cultureName} not found`);
  }
}