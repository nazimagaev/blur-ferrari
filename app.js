const content = document.querySelector(".content");
const background = document.querySelector(".background");

content.addEventListener("input", (e) => {
  const input = e.target.value;
  const length = input.length;
  const blurValue = 20 - length * 1.9;
  background.style.filter = `blur(${blurValue}px)`;
  
});
