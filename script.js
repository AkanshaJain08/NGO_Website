// Show a welcome message
window.addEventListener("load", function () {
  alert("Welcome to Hope for All!");
});

// Volunteer form
document.getElementById("volunteer-form").addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("vol-name").value;

  alert("Thank you, " + name + "! Your volunteer form is ready.");
});

// Donation form
document.getElementById("donation-form").addEventListener("submit", function (event) {
  event.preventDefault();

  let amount = "";

  if (document.getElementById("donate-250").checked) {
    amount = "₹250";
  } else if (document.getElementById("donate-500").checked) {
    amount = "₹500";
  } else if (document.getElementById("donate-1000").checked) {
    amount = "₹1,000";
  } else if (document.getElementById("donate-2500").checked) {
    amount = "₹2,500";
  } else {
    amount = document.getElementById("custom-amount").value;
  }

  if (amount === "") {
    amount = prompt("Enter your donation amount in rupees:");
  }

  if (amount !== null && amount !== "") {
    alert("Thank you for choosing to donate ₹" + amount + ". This is a demo; no payment was made.");
  }
});