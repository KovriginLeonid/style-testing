let rainbow = document.querySelector(".text__rainbow");
let rainbowstring = rainbow.textContent;
let rainbowarr = rainbowstring.split("");

rainbow.innerHTML = "";

rainbowarr.forEach((char) => {
    let rainbowspan = `<span class="rainbow-char">${char}</span>`;
    rainbow.insertAdjacentHTML("beforeend", rainbowspan)
});