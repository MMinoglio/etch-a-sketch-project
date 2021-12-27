const contanier = document.querySelector('.container');

for (i = 0; i<256; i++) {
  const div = document.createElement('div');
  div.classList.add(`div-${i}`);
  div.classList.add('divs');
  contanier.appendChild(div);
}