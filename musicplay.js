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

$('.style6').each(function(){
    var letters = $(this).text().split('');
    $(this).text('');
    for(var i = 0; i < letters.length; i++){
        if(i % 2 == 0){
            $(this).append('<span class="color_red">' + letters[i] + '</span>');
        }
        else{
            $(this).append('<span class="color_green">' + letters[i] + '</span>');
        }
    }
});

setInterval(function() { 
    var reds = $(".style6 .color_red"); 
    $(".style6 .color_green").attr("class","color_red"); 
    reds.attr("class","color_green"); 
}, 700);