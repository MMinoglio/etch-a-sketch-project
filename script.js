function askForSize() {
  let size = window.prompt("Insert a grid size smaller than 100");
  if (size > 100) {
    alert("Incorrect Size");
    askForSize();
  } else {
    return size;
  }
}

function createGrid(size) {
  const container = document.querySelector(".container");
  for (x = 0; x < size; x++) {
    const divx = document.createElement("div");
    divx.classList.add(`divx${x}`);
    divx.classList.add("divsx");
    for (y = 0; y < size; y++) {
      const divy = document.createElement("div");
      divy.classList.add(`divy${y}`);
      divy.classList.add("divsy");
      divx.appendChild(divy);
    }
    container.appendChild(divx);
  }
}

function changeSquareColorOnHover() {
  const divsy = document.querySelectorAll(".divsy");
  divsy.forEach((div) => {
    div.addEventListener("mouseenter", (event) => {
      if (!event.target.style.backgroundColor) {
        newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        event.target.style.backgroundColor = newColor;
      } else {
        if (event.target.firstChild) {
          const darker = event.target.querySelector(".dark");
          let darkNumber = parseFloat(darker.style.opacity);
          if (darkNumber === 1) {
            return;
          } else {
          darkNumber += 0.1;
          darkNumber = darkNumber.toString();
          darker.style.opacity = Math.round(darkNumber*10)/10;
          console.log(darkNumber);
          }
        } else {
          const dark = document.createElement("div");
          dark.classList.add("dark");
          dark.style.opacity = "0.1";
          event.target.appendChild(dark);
        }
      }
    });
  });
} 

const button = document.querySelector("button");
button.addEventListener("click", (e) => {
  const container = document.querySelector(".container");
  const body = document.querySelector("body");
  console.log(container);

  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  body.appendChild(container);
  createGrid(askForSize());
  changeSquareColorOnHover();
});
createGrid(askForSize());
changeSquareColorOnHover();
