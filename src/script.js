// script.js
// 🚨 LINT ERROR HERE: This line is intentionally missing a semicolon
console.log("Script loaded");

// Export this function to be tested by Jest
export function getGreetingMessage() {
  return "Hello — fix the lint error to deploy!";
}

document.getElementById("greet").addEventListener("click", () => {
  alert(getGreetingMessage());
});

// --- MOUSE TRAIL LOGIC STARTS HERE ---
document.addEventListener("DOMContentLoaded", function () {
  const trailLength = 25;
  let trailElements = []; // Initialize mouse position

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2; // Create the trail elements

  for (let i = 0; i < trailLength; i++) {
    const dot = document.createElement("div");
    dot.classList.add("mouse-trail-dot");
    dot.style.top = "0";
    dot.style.left = "0";
    const size = 5 - i * 0.1;
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    document.body.appendChild(dot);
    trailElements.push(dot);
  }

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateTrail() {
    if (trailElements.length > 0) {
      trailElements[0].style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    }
    for (let i = trailLength - 1; i > 0; i--) {
      const prev = trailElements[i - 1];
      const current = trailElements[i];
      current.style.transform = prev.style.transform;
    }
    requestAnimationFrame(animateTrail);
  }

  animateTrail();
});
