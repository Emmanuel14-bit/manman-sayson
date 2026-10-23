// Map each key to its sound file
const sounds = {
  w: "sounds/tom-1.mp3",
  a: "sounds/tom-2.mp3",
  s: "sounds/tom-3.mp3",
  d: "sounds/tom-4.mp3",
  j: "sounds/snare.mp3",
  k: "sounds/crash.mp3",
  l: "sounds/kick-bass.mp3"
};


function makeSound(key) {
  const src = sounds[key];
  if (!src) return;
  const audio = new Audio(src);
  audio.play().catch(function (err) {
    console.warn("Could not play " + src + ":", err.message);
  });
}


function buttonAnimation(key) {
  const button = document.querySelector("." + key);
  if (!button) return;
  button.classList.add("pressed");
  setTimeout(function () {
    button.classList.remove("pressed");
  }, 100);
}


document.querySelectorAll(".drum").forEach(function (button) {
  button.addEventListener("click", function () {
    const key = this.textContent.trim();
    makeSound(key);
    buttonAnimation(key);
  });
});


document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();
  makeSound(key);
  buttonAnimation(key);
});