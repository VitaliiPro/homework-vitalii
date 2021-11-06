function getRandomChinese(length) {
    return new Promise((resolve, reject) => {
        if (!Number.isInteger(length) || length <= 0) {
            reject('You must enter an integer number');
        }
        let i = 1;
        let str = '';
        while (i <= length) {
            setTimeout(() => {
                const dateTime = Date.now();
                const sign = dateTime % 100000;
                str += String.fromCharCode(sign);
                if (str.length === length) {
                    resolve(str);
                }
            }, 50 * i);
        i++;
        } 
    });
}

getRandomChinese(4).then((result) => console.log(result)).catch((error) => console.log(error));

