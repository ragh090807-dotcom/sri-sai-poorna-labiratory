function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("active");
}

function sendMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const test = document.getElementById("test").value;
  const message = document.getElementById("message").value.trim();

  const whatsappNumber = "917947148767";

  const text =
    "Hello Sri Sai Purna Laboratory,%0A%0A" +
    "I want to enquire about a lab test.%0A%0A" +
    "Name: " + name + "%0A" +
    "Phone: " + phone + "%0A" +
    "Selected Test: " + (test || "Not selected") + "%0A" +
    "Message: " + (message || "No extra message");

  window.open("https://wa.me/" + whatsappNumber + "?text=" + text, "_blank");

  event.target.reset();
}

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(function(element) {
  revealObserver.observe(element);
});
