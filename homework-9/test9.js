const boxes = document.querySelectorAll(".box");

const getRandomColor = () => {
  return (Math.floor(Math.random() * (255 - 10)) + 10);
}

const generateBlocks = () => {
  for (i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
    boxes[i].style.width = '50px';
    boxes[i].style.height = '50px';
  }
};

generateBlocks();

const generateBlocksInterval = () =>{
  setInterval(() => generateBlocks(), 1000);
}

generateBlocksInterval();
