// loop through all 12 digits
//function that takes the current digit to compare and its position, remaining data set
// if remaing data set.lenght ===1 then stop and output that number 



const path = require('path');
const fs = require('fs');

const data = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n');



    ones = new Array(12).fill(0);
    zeroes = new Array(12).fill(0);

    oxNum = "";
    COnum = "";

    for (let i=0; i < data.length ; i++){
        let dataBin = data[i].split('');
    
        dataBin.forEach((item , i) => {
            if (item==1){
                ones[i]++;
            }else {
                zeroes[i]--;
            }
        })

    }

    for (let i=0; i < ones.length ; i++){
        if(Math.abs(ones[i] > Math.abs(zeroes[i]))){
            oxNum +="1";
            COnum +="0";

        }else if (Math.abs(ones[i] == Math.abs(zeroes[i]))){
            console.log('well ill be!');
        }else {
            oxNum +="0";
            COnum +="1";
        }

    }
// Part 2

// let count = 0;

let selectedNum = COnum;
let deleteArr = [];

for (let i = 0; i<selectedNum.length;i++){
if (data.length ==1){
    console.log('finished'+data);
}else{
    if (deleteArr.length>0){
       
        for(let r=0;r<deleteArr.length; r++){
        data.splice(data.indexOf(deleteArr[r]),1);
        deleteArr.splice(r,1);
        }
    }
    for(let d=0; d<data.length;d++){
        if (data[d][i] == selectedNum[i]){
            deleteArr.push(data[d]);
           
        }
    }
}
console.log(data);

}
