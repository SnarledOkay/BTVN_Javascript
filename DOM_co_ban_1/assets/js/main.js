// Câu 1. Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu

// Đặt màu văn bản thành #777
// Đặt kích thước phông chữ thành 2rem
// Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.

const text = document.querySelector(".text") ;
text.style.color = "#777";
text.style.fontSize = "2rem" ;
text.innerHTML = "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JS" ;

// Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)

const changeBlue = document.querySelectorAll(".turn-blue") ;
changeBlue.forEach((item) => {
    item.style.color = "blue" ;
});

// Câu 3. Cho mã HTML có nội dung như sau (tạo thẻ ul-li bằng html):
// 1. Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
const createListItem = (text) => {
    let li = document.createElement("li") ;
    li.textContent = text ;
    return li ;
}

// const appendChildren = ((parent , children) => {
//     children.forEach()
// })


const targetList = document.querySelector(".list") ;
// console.log(targetList);
console.log(createListItem("Item 10")) ;

// targetList.append(createListItem("Item 8")) ;
// targetList.append(createListItem("Item 9")) ;
// targetList.append(createListItem("Item 10")) ;

// targetList.append(newElement1) ;
// 2.  Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
const turnRed = document.querySelector(".turn-red") ;
turnRed.style.color = "red" ;
// 3. Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
const turnGreen = document.querySelector(".turn-green") ;
turnGreen.style.backgroundColor = "green" ;
// 4. Remove thẻ <li> 4
const toRemove = document.querySelector(".to-remove") ;
toRemove.remove();
// 5. Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ


