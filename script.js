const envelope = document.querySelector('.envelope-cover');
const music = document.getElementById("bg-music");
envelope.addEventListener('click', () => {
    envelope.classList.toggle("flap");
    music.currentTime = 9;
     music.play();
setTimeout(() => {
    createConfetti(); 
}, 300);
    confetti.style.setProperty('--x-move', (Math.random() * 100 - 50) + 'px');
confetti.style.left = Math.random() * window.innerWidth + 'px';
confetti.style.top = '-20px'; 
});