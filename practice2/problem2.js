//sum of zero
function sumOfZero(arr){
    let left=0;
    let right=arr.length-1
   
while(left<right){
    let sum=arr[left]+arr[right];
    
    if(sum===0){
        return [arr[right],arr[left]]
    }
    else if(sum>0){
    right--
    }
    else{
        left++
    }

}

}
let arr=[-11,-4,1,2,3,4,5,8,10];
let result=sumOfZero(arr)
console.log(result)
//tm O(n)