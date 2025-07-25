// Typewriter effect
const typewriterElement = document.getElementById("typewriter");
const texts = ["Backend Developer", "Web Design"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  const currentText = texts[textIndex];

  if (!isDeleting) {
    typewriterElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeWriter, 2000);
      return;
    }
  } else {
    typewriterElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeWriter, 500);
      return;
    }
  }

  setTimeout(typeWriter, isDeleting ? 50 : 100);
}

// Start typewriter effect
setTimeout(() => {
  typeWriter();
}, 1000);

// Button click handlers (placeholder)
