let count = 0;

const counter = document.getElementById("counter");
const resetBtn = document.getElementById("reset");

counter.addEventListener("click", (e) => {
  count++;
  counter.textContent = count;

  const ripple = document.createElement("span");
  ripple.classList.add("ripple");

  const rect = counter.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height) * 2;
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = x - size / 2 + "px";
  ripple.style.top = y - size / 2 + "px";

  counter.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 500);
});

reset.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});
