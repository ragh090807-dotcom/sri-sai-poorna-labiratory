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

function openTest(title, price, desc) {
  document.getElementById("popupTitle").innerText = title;
  document.getElementById("popupPrice").innerText = price;
  document.getElementById("popupDesc").innerText = desc;

  const text =
    "Hello Sri Sai Purna Laboratory,%0A%0A" +
    "I want to enquire about this lab test:%0A%0A" +
    "Test: " + title + "%0A" +
    "Price: " + price;

  document.getElementById("popupWhatsapp").href =
    "https://wa.me/917947148767?text=" + text;

  document.getElementById("testPopup").classList.add("active");
}

function closeTest() {
  document.getElementById("testPopup").classList.remove("active");
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

document.getElementById("testPopup").addEventListener("click", function(event) {
  if (event.target.id === "testPopup") {
    closeTest();
  }
});
