function createGrid (size) {

  const container = document.querySelector('.container');
  for (x = 0; x<size; x++) {
    const divx = document.createElement('div');
    divx.classList.add(`divx${x}`)
    divx.classList.add('divsx')
    for (y = 0; y < size; y++) {
      const divy = document.createElement('div');
      divy.classList.add(`divy${y}`);
      divy.classList.add('divsy');
      divx.appendChild(divy);
    }
    container.appendChild(divx);
  }
}

function changeSquareColorOnHover () {
  const divsy = document.querySelectorAll('.divsy');
  divsy.forEach(div => {
    div.addEventListener("mouseenter", function(event){
      event.target.style.backgroundColor = "purple";
    }) 
  });
}

createGrid(16);
changeSquareColorOnHover ()