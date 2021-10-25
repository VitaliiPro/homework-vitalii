
const getRandomColor = () => {
  return (Math.floor(Math.random() * (255 - 10)) + 10);
}

const divContainer = document.createElement("div");
  divContainer.classList.add("container");
  document.body.appendChild(divContainer);

const generateBlocks = () => {
  const boxContainer = document.querySelector(".container");
  for (let i = 0; i < 25; i++) {
    const square = document.createElement("div");
    square.classList.add("box");
    square.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`
    boxContainer.append(square);
  }
};

generateBlocks();

const generateBlocksInterval = () => {
    setInterval(generateBlocks, 1000);
}

