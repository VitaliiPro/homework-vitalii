function* createIdGenerator() {
    let i = 1;
    while(true) {
        yield i++;
    }
}

const idGenerator = createIdGenerator();

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);


function* newFontGenerator(size) {
    let fontSize = yield size;
    while(true) {
        switch (fontSize ) {
            case "up":
                size += 2;
                fontSize = yield size;
                break;
            case "down":
                size -= 2;
                fontSize = yield size;
                break;
            default: 
                fontSize = yield size;
        }
    }
}

const fontGenerator = newFontGenerator(14);

console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next().value);