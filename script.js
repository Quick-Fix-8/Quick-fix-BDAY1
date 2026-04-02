// 🎂 Countdown
const birthday = new Date("April 3, 2026 00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const gap = birthday - now;

    const days = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("countdown").innerHTML =
        gap > 0
        ? `🎉 ${days} days ${hours} hrs to go!`
        : "🎉 It's your birthday today!";
}, 1000);

// 💬 Send WhatsApp Message
function sendWhatsApp() {
    const phoneNumber = "233555655498"; // 👉 PUT YOUR NUMBER HERE
    const message = "Happy Birthday! 🎉🎂 Wishing you all the best!";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

// 🎵 Music
function playMusic() {
    document.getElementById("music").play();
}

// 📤 Share Page
function shareWhatsApp() {
    const text = "Check out this birthday page 🎉";
    const url = "https://wa.me/?text=" + encodeURIComponent(text);
    window.open(url, "_blank");
}

// 🎆 Fireworks
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createFirework() {
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: canvas.width / 2,
            y: canvas.height / 2,
            dx: (Math.random() - 0.5) * 5,
            dy: (Math.random() - 0.5) * 5,
            life: 100
        });
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
        p.x += p.dx;
        p.y += p.dy;
        p.life--;

        ctx.fillRect(p.x, p.y, 2, 2);

        if (p.life <= 0) particles.splice(i, 1);
    });

    requestAnimationFrame(animate);
}

setInterval(createFirework, 2000);
animate();