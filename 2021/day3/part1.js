const path = require('path');
const fs = require('fs');

const data = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n');
    
let avgNum = new Array(12).fill(0);

for (let i=0; i < data.length ; i++){
    let dataBin = data[i].split('');

    dataBin.forEach((item , i) => {
        if (item==1){
            avgNum[i]++;
        }else {
            avgNum[i]--;
        }
    })
    
}
console.log(avgNum);
for (let i = 0;i<avgNum.length;i++){
    if(avgNum[i]>0){
        avgNum[i]= 1;
    } else{
        avgNum[i]=0;
    }
}
console.log(avgNum)




// 001010001110 =  654
// 110101110001 = 3441
