// console.log("abc xyz") ;

// 1. Khai báo biến - var / let / const
//const - biến ko bị thay đổi
//let - gắn lại được giá trị (dùng nhiều)
//var - gán lại đc giá trị - dùng ít / hạn chế dùng - khác let ở cơ chế hosting (dễ gây lỗi hơn)


var name = "java 30" ; //ít khi dùng hơn 2 cái còn lại
name = "java 30 123" ;
console.log(name) ;

let age = "58" ;
age = "30" ;
console.log(age) ;


const email = "rosmontis1508@gmail.com" ;
console.log(email) ;

// email = "123" ;

//2. Quy tac khai bao bien
const homeWork = "Lam btvn day du" ;
console.log(homeWork) ;

//3. Kiem tra kieu du lieu cua bien (su dung typeof)
const number = 30 ;
console.log(typeof(count)) ;

//4. Pham vi bien
// global - nam ngoai cac khoi block { ... } - dung dc trong toan bo du an
let test = "example.test" ;
console.log(test) ;

//local - trong function
function hello() {
    console.log(test) ;
    console.log("Hello VietNam!") ;
    company = "TechMaster" ;
    console.log(company) ;
}

// Thuc thi
hello() ;
console.log(company);

//5. Kieu du lieu
const date = "2025/05/16 \" T00:00" ;
console.log(date) ;

//back-tick - es6
const blogContent = `jdkfnkajdsfh ' " / ? asdfjsdf` ;
console.log(blogContent) ;

//Cong chuoi
const firstName = "Nguyen" ;
const lastName = "Cao Huy" ;
// const fullName = firstName + " " + lastName ;
const fullName = `${firstName} ${lastName}` ;

console.log(fullName) ;

function calculateFactorial(n){
    let result = 1 ;
    for(let i = 2 ; i <= n ; i++){
        result *= i ;
    }
    return result ;
}

console.log(calculateFactorial(10)) ;

function reverseString(str){
    return str.split('').reverse().join('') ;
}

console.log(reverseString("abcdef"));

function translate(str){
    switch(str){
        case "VN": 
            return "Xin Chào" ;
            break ;
        case "EN":
            return "Hello" ;
            break ;
        case "FR":
            return "Bonjour" ;
            break ;
        case "GER":
            return "Guten tag" ;
            break ;
        case "JP":
            return "Kon'nichiwa" ;
            break ;
    }
}

console.log(translate("JP")) ;

function subString(str){
    let sub = str.substring(0,10) ;
    const doanCuoi = "..." ;
    return sub + doanCuoi ;
}

console.log(subString("xinchaomoinguoinhe")) ;