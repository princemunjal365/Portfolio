// Modal Control Functions
function openModal(modalId) {
  document.getElementById(modalId).classList.add("active");
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove("active");
}

// Close modal if user clicks outside the modal card
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("virtual-modal")) {
    e.target.classList.remove("active");
  }
});

// Interactive Parallax Mouse Tilt for the 3D Room
document.addEventListener("mousemove", (e) => {
  const scene = document.querySelector(".room-perspective");
  if (!scene) return;

  const xPos = (window.innerWidth / 2 - e.clientX) / 40;
  const yPos = (window.innerHeight / 2 - e.clientY) / 40;

  // Retain base isometric rotation while reacting to cursor position
  scene.style.transform = `rotateX(${20 + yPos}deg) rotateY(${-30 + xPos}deg) scale(0.9)`;
});
