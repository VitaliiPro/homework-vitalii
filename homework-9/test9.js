const findDiv = () => {
  const createDiv = () => {
    const divContainer = document.createElement("div");
    divContainer.classList.add("container");
    document.body.appendChild(divContainer);
  }
if(document.body.classList.contains("container")) {
    divContainer.innerHTML = " ";
    return createDiv();
  } else {
    return createDiv();
  }
}

findDiv();

const getRandomColor = () => {
  return (Math.floor(Math.random() * (255 - 10)) + 10);
}

const generateBlocks = () => {
  const boxContainer = document.querySelector(".container");
  boxContainer.innerHTML = " ";
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
generateBlocksInterval();


