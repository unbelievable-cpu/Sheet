window.onload = () => {
  const shapeSelect = document.querySelector('.select-one[data-name="shape"]');
  if (shapeSelect) {
    // Установлюємо дефолтне значення, якщо його немає
    if (!shapeSelect.value) {
      shapeSelect.value = "512x768"; // Значення за замовчуванням
    }
    // Викликаємо подію, щоб система зрозуміла, яке значення обране
    shapeSelect.dispatchEvent(new Event("change"));
  }
};

window.onload = () => {
  let numImages = document.querySelector('.select-one[data-name="numImages"]');
  if (numImages) {
    
    if (!numImages.value) {
      numImages.value = "6"; 
    }
    
    numImages.dispatchEvent(new Event("change"));
  }
};

window.onload = () => {
  let category = document.querySelector('.select-one[data-name="category"]');
  if (category) {
    
    if (!category.value) {
      category.value = ",";
    }
    
    category.dispatchEvent(new Event("change"));
  }
};

function myFunction() {
  var popup = document.getElementById("comm");
  popup.classList.toggle("show");
}
