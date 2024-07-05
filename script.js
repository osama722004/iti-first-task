const slider = document.querySelector(".slider_body");
const sliderContainer = document.querySelector(".slider");
let index = 0;
const totalImages = slider.querySelectorAll("img").length;

function showNextImage() {
  index = (index + 1) % totalImages;
  const sliderWidth = sliderContainer.clientWidth;
  slider.style.transform = `translateX(${index * sliderWidth}px)`;
}

setInterval(showNextImage, 5000);

const birthdayContent = document.getElementById("birthday-content");
const birthdayImage = document.getElementById("birthday-image");
const birthdayForm = document.getElementById("birthday-form");

// Switch from image to form after 5 seconds
setTimeout(function () {
  birthdayImage.style.display = "none";
  birthdayForm.style.display = "block";
}, 500);

// Handle form submission
birthdayForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Get the message from the textarea
  const message = document.getElementById("message").value;

  // Simulate a delay before showing the thank-you message
  setTimeout(function () {
    // Show dialog message thanking the user
    showDialogMessage("Thank you for your kind message!");

    // Optionally reset the form or clear the message textarea
    // birthdayForm.reset();
    // document.getElementById("message").value = "";
  }, 1000); // Delay for 1 second before showing dialog
});

// Function to show a dialog message
function showDialogMessage(message) {
  alert(message); // Show a simple alert dialog
  // You can customize this to use a modal or custom dialog library
}
