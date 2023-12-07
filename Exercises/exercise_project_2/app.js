const heightInput = document.getElementById('heightInput');
const heightDisplay = document.getElementById('heightDisplay');

heightDisplay.textContent = heightInput.value;
heightInput.addEventListener('change', () => {
  heightDisplay.textContent = heightInput.value;
});