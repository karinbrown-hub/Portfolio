const roles = [
    "Digital Marketing & SEO Specialist",
    "Graphic Designer",
    "Virtual Assistant",
    "Web Developer"
];

let roleIndex = 0;
let charIndex = 0;
const typingDelay = 100;
const erasingDelay = 50;
const newRoleDelay = 2000;
const typedTextSpan = document.querySelector(".typed-text");

function type() {
    if (charIndex < roles[roleIndex].length) {
        typedTextSpan.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newRoleDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        roleIndex++;
        if (roleIndex >= roles.length) roleIndex = 0;
        setTimeout(type, typingDelay);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, newRoleDelay);
});