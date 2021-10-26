const getContainerByClassName = (className) => {
  let div = document.querySelector(`.${className}`);

  if (div) {
    div.innerHTML = " ";
  } else {
    div = document.createElement("div");
    div.classList.add("container");
    document.body.appendChild(div);
  }

  return div;
};

const getHex = () => {
  return `#${Math.random().toString(16).slice(2,8)}`;
};

const generateBlocks = () => {
  const boxContainer = getContainerByClassName('container');
  for (let i = 0; i < 25; i++) {
    const square = document.createElement("div");
    square.classList.add("box");
    square.style.backgroundColor = getHex();
    boxContainer.append(square);
  }
};

const generateBlocksInterval = () => {
	setInterval(generateBlocks, 1000);
};

generateBlocksInterval();


