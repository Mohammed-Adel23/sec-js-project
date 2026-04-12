const formBtn = document.getElementById("submit-btn");
const emailInput = document.getElementById("search-bar");
const warningIcon = document.getElementById("warningg");
const warningText = document.getElementById("warning-text-container");
warningIcon.style.display = "none";
warningText.style.display = "none";

formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const emailValue = emailInput.value;

  if (!emailValue) {
    warningIcon.style.display = "block";
    warningText.style.display = "block";
    emailInput.style.border = "2px solid var(--Red-500)";
  } else {
    warningIcon.style.display = "none";
    warningText.style.display = "none";
    emailInput.style.border = "1px solid var(--Pink-400)";
    alert("Thank you for subscribing!");
    emailInput.value = "";
  }
});
