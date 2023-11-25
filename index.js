document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".sidenav a");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50,
          behavior: "smooth",
        });
      }
    });
  });
});
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({});
  });
});
function submitForm() {
  const form = document.getElementById("contactForm");
  if (form.checkValidity()) {
      alert("Form submitted successfully!");
  } else {
      alert("Please fill out all required fields.");
  }
  
  // Prevent default form submission
  event.preventDefault();
}
