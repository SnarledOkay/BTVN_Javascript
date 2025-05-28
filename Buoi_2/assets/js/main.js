let nums = [2,3,5,7,11,13,15] ;

//Bai 7: Viết function nhận vào số n và kiểm tra n có phải số nguyên tố hay không.
function isPrime(num){
    if(num <= 1) return false ;
    if(num == 2) return true ;
    for(let i = 3 ; i < Math.sqrt(num) ; i++){
        if(num % i === 0){
            return false ;
        }
    }
    return true ;
}

let minDif = 10000000 ;
let result ;

//Bai 1: Viet function nhan 1 mang so va mot so X de tra ra SNT trong mảng gần với giá trị X nhất.
const findPrime = (n) => {
    for(let i = 0 ; i < nums.length ; i++){
        if(isPrime(nums[i])){
            let difference = Math.abs(nums[i] - n) ;
            if(difference < minDif){
                minDif = difference ;
                result = nums[i] ;
            }
        }
    }
    return result ;
} ;

const isPalindrome = (n) => {
    let str = n.toString() ;
    return str === str.split('').reverse().join('') ;
}

const containFour = (n) => {
    let str = n.toString() ;
    for(let i = 0 ; i < str.length ; i++){
        let curChar = str[i] ;
        if(curChar == 4) return false ;
    }
    return true ;
}

//Bai 2:Viết chương trình liệt kê các số nguyên có từ 5 đến 7 chữ số thoả mãn tất cả các điều kiện sau:
// a) Là số nguyên tố.
// b) Là số thuận nghịch.
// c) Không chứa chữ số 4
const printNums = () => {
    for(let i = 10001 ; i <= 9999999 ; i++){
        if(findPrime(i) && isPalindrome(i) && !containFour(i)){
            console.log(i) ;
        }
    }
}

// printNums() ;

/*Bai 3: Viết chương trình liệt kê các số nguyên có 7 chữ số thoả mãn cả 3 điều kiện sau:
a) Là số nguyên tố.
b) Tất cả các chữ số là nguyên tố
c) Đảo của nó cũng là một số nguyên tố*/

const pr = [2,3,5,7] ;

const printPrime = () => {
    for(let i = 0 ; i < 4 ; i++){
        for(let j = 0 ; j < 4 ; j++){
            for(let m = 0 ; m < 4 ; m++){
                for(let n = 0 ; n < 4 ; n++){
                    for(let p = 0 ; p < 4 ; p++){
                        for(let q = 0 ; q < 4 ; q++){
                            for(let k = 1 ; k < 3 ; k++){
                                let number = (`${pr[i]}${pr[j]}${pr[m]}${pr[n]}${pr[p]}${pr[q]}${pr[k]}`)
                                let str = number.split('').reverse().join('') ;
                                if(isPrime(number) && isPrime(str)){
                                    console.log(number) ;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

// printPrime() ;


// Bài 4: Viết function nhận vào 1 mảng số. Tìm số lớn thứ hai và vị trí của nó trong dãy. Chú ý trường hợp cả dãy bằng nhau thì sẽ không có số lớn thứ 2.
let daySo = [1,1993,2,2384,7, 843,14,25, 300,29,40,30,58]; 

// const find2ndLarge = (arr) => {
//     let maxi = -1000000 , maxi2nd = -1000000 ;
//     for(let i = 0 ; i < arr.length() ; i++){
//         if(arr[i] > maxi)
//     }
// }

// Bài 5: Viết function nhận vào 2 số tự nhiên m và n, sao cho m < n. Hãy liệt kê các số chính phương trong đoạn [m,n]. Có bao nhiêu số chính phương?

const printSquare = (a , b) => {
    let m = Math.sqrt(a) ; 
    let n = Math.sqrt(b) ;
    if(m*m < a) m++ ;
    let numScp = n-m+1 ;
    console.log(`Co ${numScp} so chinh phuong: `)
    for(let i = m ; i <= n ; i++){
        console.log(i*i) ;
    }
}

printSquare(10,200) ;







