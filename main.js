const buttons = document.querySelectorAll(".hex-button");
const lines = document.querySelector(".lines");
const title = document.getElementById("title");
const description = document.getElementById("description");

const contentData = [
  { title: "About me", text: "Access structured information and documentation." },
  { title: "Education", text: "Follow guided steps to build expertise." },
  { title: "Current Projects", 
   text: 
    "Developed a React-based dashboard integrating real-time stock & crypto data, personal banking, and health metrics into a single interface.
     Implemented modular, reusable components and state management to handle complex user interactions across multiple sections.
     Designed real-time and historical charts using Recharts with dynamic line colors, gradient fills, and multiple assets per chart.
     Built responsive, data-heavy dashboards with emphasis on performance, UX, and accessibility.
     Enabled interactive sidebar navigation, filtering, and toggling between financial and health views for seamless user experience.
     Prepared architecture for API integration with stock exchanges, crypto APIs, and banking services." },
  { title: "Contact me", text: "6188304255 joshponce1997@gmail.com" }
];

let activeIndex = null;

/* Render UI based on state */
function render() {
  buttons.forEach((btn, i) => {
    btn.classList.toggle("active", i === activeIndex);
  });

  if (activeIndex === null) {
    title.textContent = "Welcome!";
    description.textContent = "Click a shape above to see more information.";
    lines.classList.remove("active");
  } else {
    title.textContent = contentData[activeIndex].title;
    description.textContent = contentData[activeIndex].text;
    lines.classList.add("active");
  }
}

/* Firework particle effect */
function createFirework(button) {
  const rect = button.getBoundingClientRect();
  const buttonRect = button.getBoundingClientRect();
  const centerX = buttonRect.width / 2;
  const centerY = buttonRect.height / 2;

  for (let i = 0; i < 10; i++) {
    const particle = document.createElement("span");
    particle.classList.add("particle");

    const angle = Math.random() * Math.PI * 2;
    const radius = 40 + Math.random() * 20;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    particle.style.setProperty("--x", x + "px");
    particle.style.setProperty("--y", y + "px");

    button.appendChild(particle);

    particle.addEventListener("animationend", () => particle.remove());
  }
}

/* Event listeners */
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const index = Number(button.dataset.index);
    activeIndex = activeIndex === index ? null : index;
    render();

    createFirework(button);
  });
});
