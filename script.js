const messages = {
  0: "Sunday: Take it slow and breathe. You deserve rest! 🧘‍♀️",
  1: "Monday: New week, new chances. You've got this! 💪",
  2: "Tuesday: Keep going—you're already doing amazing! 🚀",
  3: "Wednesday: Halfway there! Smile, you're shining! 😄",
  4: "Thursday: Breathe, Believe, Thrive! 🌟",
  5: "Friday: Celebrate your wins this week! 🎉",
  6: "Saturday: Do what makes your soul happy today 🧡"
};

const owl = document.getElementById('owl');
const messageBox = document.getElementById('messageBox');

owl.addEventListener('click', () => {
  const today = new Date().getDay();
  messageBox.textContent = messages[today];
  messageBox.classList.add('show');
  
  owl.classList.add('clicked');
  setTimeout(() => owl.classList.remove('clicked'), 600);

  launchConfetti();
});

const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function createConfettiPiece() {
  return {
    x: Math.random() * canvas.width,
    y: -20,
    size: Math.random() * 6 + 4,
    speed: Math.random() * 3 + 2,
    color: `hsl(${Math.random() * 360}, 70%, 60%)`,
    tilt: Math.random() * 10 - 5
  };
}

function launchConfetti() {
  for (let i = 0; i < 40; i++) {
    confetti.push(createConfettiPiece());
  }
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((c, i) => {
    c.y += c.speed;
    c.x += Math.sin(c.tilt);
    ctx.fillStyle = c.color;
    ctx.fillRect(c.x, c.y, c.size, c.size);
    if (c.y > canvas.height) confetti.splice(i, 1);
  });
  requestAnimationFrame(animateConfetti);
}
animateConfetti();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
