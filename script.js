// Mobile Navigation

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});


// Set minimum appointment date to today

const dateInput = document.getElementById("date");

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

dateInput.min = `${year}-${month}-${day}`;


// Doctor buttons

const doctorButtons = document.querySelectorAll(".doctor-btn");
const doctorSelect = document.getElementById("doctor");

doctorButtons.forEach(button => {

  button.addEventListener("click", () => {

    const selectedDoctor = button.dataset.doctor;

    doctorSelect.value = selectedDoctor;

    document.getElementById("appointment").scrollIntoView({
      behavior: "smooth"
    });

  });

});


// Appointment form

const appointmentForm = document.getElementById("appointmentForm");
const successMessage = document.getElementById("successMessage");

appointmentForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const doctor = document.getElementById("doctor").value;
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (
    name === "" ||
    phone === "" ||
    doctor === "" ||
    service === "" ||
    date === "" ||
    time === ""
  ) {
    alert("Please complete all required fields.");
    return;
  }


  // Basic phone validation

  const phonePattern = /^[0-9+\-\s]{10,15}$/;

  if (!phonePattern.test(phone)) {
    alert("Please enter a valid phone number.");
    return;
  }


  // Show confirmation

  successMessage.classList.add("show");

  successMessage.querySelector("p").textContent =
    `Thank you, ${name}. Your appointment with ${doctor} has been requested.`;


  // Reset form after successful booking

  appointmentForm.reset();

  // Keep success message visible

  setTimeout(() => {
    successMessage.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 100);

});
