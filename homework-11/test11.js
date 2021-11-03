function getRandomChinese(length) {
    let i = 0;
    let str = '';
    let promise = new Promise((resolve) => {
        while (i < length) {
            setTimeout(() => {
                const dateTime = Date.now();
                const sign = dateTime % 100000;
                str += String.fromCharCode(sign);
                if (str.length === length) {
                    resolve(str);
                }
            }, i * 50);
        i++
        }
    });
    return promise;
}

getRandomChinese(4).then((result) => console.log(result));