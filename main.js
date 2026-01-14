const buttons = document.querySelectorAll(".hex-button");
const lines = document.querySelector(".lines");
const title = document.getElementById("title");
const description = document.getElementById("description");

const contentData = [
  { title: "Knowledge Base", text: "Access structured information and documentation." },
  { title: "Learning Path", text: "Follow guided steps to build expertise." },
  { title: "Community", text: "Connect with others and share ideas." },
  { title: "Resources", text: "Explore tools, references, and assets." }
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
