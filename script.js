const clock = document.querySelector(".clock");

clock.addEventListener("load", tick);
// if use es6 for function it doesnt work
function tick() {
  const now = new Date();
  const hour = now.getHours();
  const minuts = now.getMinutes();
  const second = now.getSeconds();

  const html = `
    <span>${hour} :</span>
    <span>${minuts} :</span>
    <span>${second}</span>
  `;

  clock.innerHTML = html;
};

setInterval(tick, 1000);
