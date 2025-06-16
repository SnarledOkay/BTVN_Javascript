// Bài 1. Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất
const getStringMaxLength = (arr) => {
    let maxLength = 0 ;
    for(const element of arr){
        maxLength=Math.max(element.length,maxLength);
    }
    const targetString = arr.filter(index => index.length === maxLength) ;
    return targetString ;
}; 
console.log(getStringMaxLength(['aba', 'aa', 'ad', 'c', 'vcd'])) ;

// Bài 2:
// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true
// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần
users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
];

const findUsers = (arr) => {
    const targetUser = arr.filter(user => user.age > 25 && user.isStatus === true);
    return targetUser ;
};
console.log(findUsers(users));

const sortUserByAge = (arr) => {
    return arr.sort((a,b) => a.age-b.age) ;
}
console.log(sortUserByAge(users)) ;

// Bai 3:  Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần
const findFrequency = (arr) => {
    const frequency = {} ;
    users.forEach(element => {
        frequency[element.name] = (frequency[element.name] || 0 ) +1 ;
    });
}

console.log(frequency);