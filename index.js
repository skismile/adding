// let a=1
// let b=2
// let sum=a+b
// console.log(sum);

// palindrome
// let str="abba"
// let n=str.length //4

// let ulta=""
// // console.log(n);
// for(let i=n-1;i>=0;i--)
// {
// ulta=ulta+str[i]
// // console.log(str[i])

// }

// console.log(str==ulta);


function checkPalindrome(str){
    let n=str.length
    let left = 0;
    let right = n - 1;
    
    while (left < right) {
      if (str[left] == str[right]) {
        left++;
        right--;
      } else {
        return "no this is not"
      }
    }
return "yes its palindrome"  
}














let str = "aaabaaa";
let n = str.length;
let ans=checkPalindrome(str)
console.log(ans)


let ans2=checkPalindrome("soyel")
console.log(ans2);
 //4

