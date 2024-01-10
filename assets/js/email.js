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