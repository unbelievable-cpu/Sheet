window.onload = () => {
  let shapeSelect = document.querySelector('.select-one[data-name="shape"]');
  if (shapeSelect) {
  shapeSelect.value = "512x768"; // Встановлюємо потрібне значення
  shapeSelect.dispatchEvent(new Event("change")); // Емуляція вибору
  }
};
