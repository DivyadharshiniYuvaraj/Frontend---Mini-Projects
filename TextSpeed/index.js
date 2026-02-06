const textInput = document.getElementById("textInput");
const speedInput = document.getElementById("speedInput");
const submitBtn = document.getElementById("submitBtn");
const output = document.getElementById("output");

let typingTimeout;
let text = "";
let index = 0;
let maxDelay = 300;

function type() {

    let speed = Number(speedInput.value) || 1;
    let delay = maxDelay / speed;

    if (index < text.length) {
        output.textContent += text.charAt(index);
        index++;
        typingTimeout = setTimeout(type, delay);
    }
    else {
        output.textContent = "";
        index = 0;
        typingTimeout = setTimeout(type, delay);
    }
}

submitBtn.addEventListener("click", () => {
    clearTimeout(typingTimeout);
    text = textInput.value;
    output.textContent = "";
    index = 0;
    type();
});

speedInput.addEventListener("input", () => {
    clearTimeout(typingTimeout);
    type(); 
});