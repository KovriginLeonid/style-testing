let rainbow = document.querySelector(".text__rainbow");
let rainbowstring = rainbow.textContent;
let rainbowarr = rainbowstring.split("");

rainbow.innerHTML = "";

rainbowarr.forEach((char) => {
    let rainbowspan = `<span class="rainbow-char">${char}</span>`;
    rainbow.insertAdjacentHTML("beforeend", rainbowspan)
});

// modal
const modal = document.querySelector(".modal__body");
const openModal = document.querySelector(".modal__open");
const closeModal = document.querySelector(".modal__close");

openModal.addEventListener ('click', () => {
    modal.showModal();
})
closeModal.addEventListener ('click', () => {
    modal.close();
})