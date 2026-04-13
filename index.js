const formBtn = document.getElementById("submit-btn");
const emailInput = document.getElementById("search-bar");
const warningIcon = document.getElementById("warningg");
const warningText = document.getElementById("warning-text-container");
warningIcon.style.display = "none";
warningText.style.display = "none";
const modal = document.getElementById("confirm-modal");
const okBtn = document.getElementById("ok-btn");
const cancelBtn = document.getElementById("cancel-btn");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");

formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailValue)) {
    warningIcon.style.display = "block";
    warningText.style.display = "block";
    emailInput.style.border = "2px solid var(--Red-500)";
  } else {
    warningIcon.style.display = "none";
    warningText.style.display = "none";
    emailInput.style.border = "1px solid var(--Pink-400)";
    modal.style.display = "flex";
  }
});

okBtn.addEventListener("click", () => {
  modalTitle.innerText = "Success!";
  modalText.innerText = "You will be notified on release.";
  cancelBtn.style.display = "none";

  okBtn.innerText = "Close";
  okBtn.onclick = () => {
    modal.style.display = "none";
    emailInput.value = "";
    location.reload();
  };
});

cancelBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
