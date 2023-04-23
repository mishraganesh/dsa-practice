//sum of zero

function sumOfZero(arr){
    
    for(number of arr){
        for(let j=1;j<arr.length;j++){
            if(arr[j]+number===0){
                return ([arr[j],number]) 
            }
        }
    }
}

let arr=[-5,-2,1,2,3,4,5];
let result=sumOfZero(arr)
console.log(result)
//tm o(n2)