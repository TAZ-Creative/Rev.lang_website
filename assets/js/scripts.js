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

const testimonials = [
  {
    name: "Mateen Damola",
    testimonial:
      " I think this is the application language learners are waiting for. It complements my learning. Since I can already construct simple sentences, and all I need to know is verbs and names of things in the other language.",
    image: "assets/images/img-1.jpg",
  },
  {
    name: "Mat Damola",
    testimonial:
      " I think this is the application language learners are waiting for. It complements my learning. Since I can already construct simple sentences, and all I need to know is verbs and names of things in the other language.",
    image: "assets/images/img-1.jpg",
  },
  {
    name: "You Damola",
    testimonial:
      " I think this is the application language learners are waiting for. It complements my learning. Since I can already construct simple sentences, and all I need to know is verbs and names of things in the other language.",
    image: "assets/images/img-1.jpg",
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

nextBtn.addEventListener("click", () => {
  currentTestimonialIndex = (currentTestimonialIndex + 1) % totalTestimonials;
  displayCurrentTestimonial();
  console.log("next button clicked");
});

prevBtn.addEventListener("click", () => {
  currentTestimonialIndex =
    (currentTestimonialIndex - 1 + totalTestimonials) % totalTestimonials;
  displayCurrentTestimonial();
});

function displayCurrentTestimonial() {
  const currentTestimonial = testimonials[currentTestimonialIndex];

  imgContainer.src = currentTestimonial.image;
  nameElement.textContent = currentTestimonial.name;
  testimonialElement.textContent = currentTestimonial.testimonial;
}

window.onload = displayCurrentTestimonial;
