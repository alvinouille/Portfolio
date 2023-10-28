const text = `Born in 1997 in Landerneau, France. I strongly believe that being a software developer is building tomorrow's world. Currently at Ecole 42 with a mission of constantly improving myself, I am pursuing ways to contribute to meaningful projects.`;
const textContainer = document.getElementById("text");
const cursor = document.getElementById("cursor");

function typeText() {
    let index = 0;
    const interval = setInterval(function() {
        if (textContainer.textContent.endsWith('|')) {
            textContainer.textContent = textContainer.textContent.slice(0, -1);
        }
        textContainer.textContent += text[index] + '|';
        index++;
        if (index === text.length) {
            clearInterval(interval);
            textContainer.textContent = textContainer.textContent.slice(0, -1);
        }
    }, 40);
}

typeText();