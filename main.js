gsap.registerPlugin(SplitText);

let split = new SplitText("#main", { type: "chars", charsClass: "char++" });
let chars = split.chars;
let split2 = new SplitText("#reflection", {
  type: "chars",
  charsClass: "char++"
});

// Function to make a random letter flicker
function flickerChar() {
  // Pick a random letter
  const randomChar = `.char${Math.floor(Math.random() * chars.length) + 1}`;
  console.log(randomChar);

  // Animate the chosen letter
  gsap.to(randomChar, {
    opacity: 0.1, // Random opacity between 0.3 and 0.8
    duration: 0.05, // Flicker duration
    yoyo: true, // Makes the animation play in reverse, returning the letter to full opacity
    repeat: 3,
    onComplete: function () {
      // Wait for a couple of seconds before flickering another letter
      setTimeout(flickerChar, 2000 + Math.random() * 1000);
    }
  });
}

// Start the flicker effect
flickerChar();

gsap.to("h1#main", {
  y: 10,
  repeat: -1,
  yoyo: true,
  duration: 1,
  ease: "power1.inOut"
});
gsap.to("h1#reflection", {
  y: 40,
  repeat: -1,
  yoyo: true,
  duration: 1,
  ease: "power1.inOut"
});
