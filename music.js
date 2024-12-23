const toggleLink = document.getElementById('toggleMusic');
const music = document.getElementById('backgroundMusic');

// Змінна для відстеження статусу
let isPlaying = false;

// Функція для керування відтворенням
toggleLink.addEventListener('click', (event) => {
  event.preventDefault(); // Забороняємо перезавантаження сторінки
  
  if (isPlaying) {
    music.pause(); // Зупиняємо музику
    toggleLink.textContent = '🎵 Play music';
  } else {
    music.play(); // Відтворюємо музику
    toggleLink.textContent = '⏸ Stop music';
  }

  isPlaying = !isPlaying; // Перемикаємо статус
});