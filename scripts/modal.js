// Змінні для модального вікна
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.querySelector(".close");

// Відкриття модального вікна
openModal.addEventListener("click", () => {
    console.log("!!!!!!")
  modal.style.display = "block";
});

// Закриття модального вікна
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Закриття модального вікна при кліку за межі його контенту
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Форма (опціонально: можна додати обробку)
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Thank you for your message! We'll get back to you soon.");
  modal.style.display = "none";
});