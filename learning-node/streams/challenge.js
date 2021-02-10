const { Transform } = require('stream');
let count = 1;

const transformStream = new Transform({
    transform(chunk,encoding,callback) {
        
        const lChunk = chunk.toString();
        const aChunk = lChunk.split(' ');
        const aRes = aChunk.map((str, i) => {
            let res;
            console.log(i)
            if( i === 0){
                res = str;
            } else {
                res = str.charAt(0).toUpperCase() + str.slice(1)  ;
            }
            return res;
        })
        this.push(aRes.join(''));
        callback();
    }
});

process.stdin.pipe(transformStream).pipe(process.stdout);