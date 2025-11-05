// Intentionally missing a semicolon to trigger ESLint 'semi' rule
console.log("Script loaded");

export function getGreetingMessage() {
  return "Hello — fix the lint error to deploy!";
}

// Browser-only button listener (skipped in Jest to avoid null error)
if (typeof document !== "undefined") {
  const greetButton = document.getElementById("greet");
  if (greetButton) {
    greetButton.addEventListener("click", () => {
      alert(getGreetingMessage());
    });
  }
}

// --- MOUSE TRAIL LOGIC STARTS HERE ---
document.addEventListener("DOMContentLoaded", function () {
  const trailLength = 25;
  let trailElements = [];

  // Initialize mouse position to center of the screen for a smooth start
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  // Create the trail elements and add them to the body
  for (let i = 0; i < trailLength; i++) {
    const dot = document.createElement("div");
    dot.classList.add("mouse-trail-dot");

    // Critical: Set top/left to 0 to ensure the CSS transform origin is correct
    dot.style.top = "0";
    dot.style.left = "0";

    // Size variance for the tapering effect
    const size = 5 - i * 0.1;
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;

    // Set initial position
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

    document.body.appendChild(dot);
    trailElements.push(dot);
  }

  // Update mouse position on mousemove
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Animation Loop using requestAnimationFrame
  function animateTrail() {
    // 1. Position the first element to the current mouse position
    if (trailElements.length > 0) {
      trailElements[0].style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    }

    // 2. The rest of the elements follow the one before them
    for (let i = trailLength - 1; i > 0; i--) {
      const prev = trailElements[i - 1];
      const current = trailElements[i];
      current.style.transform = prev.style.transform;
    }

    requestAnimationFrame(animateTrail);
  }

  // Start the animation loop when the page loads
  animateTrail();
});
