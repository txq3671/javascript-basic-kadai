const getText = document.getElementById('text');
const changeBtn = document.getElementById('btn');

changeBtn.addEventListener('click', ()=> {
  getText.textContent = 'ボタンをクリックしました';
});