// Yêu cầu: 
// Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 5 ký tự trong đoạn văn (background = “yellow”)
const alltext = document.querySelector(".text");

const highlightWords = (element) => {
const contentOfParagraph = element.textContent;
const words = contentOfParagraph.split(/\s+/);      
const highlightText = words.map(word => {
  const cleanword = word.replace(/[^a-zA-Z]/g, '');
    if(cleanword.length > 4){
        return `<span style="background-color: yellow">${word}</span>`;
        } else {
            return word;
        }
    }).join(' ');
  element.innerHTML = highlightText;
 };

highlightWords(alltext);

// Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p

const facebookLink = document.createElement("a") ;
facebookLink.href = "facebook.com" ;
facebookLink.textContent = "link facebook";
// console.log(facebookLink);

const textBox = document.querySelector(".text") ;
textBox.style.height = "auto";
textBox.after(facebookLink); /*Append chưa cho khoảng cách , after mới cho khoảng cách*/


// Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
const wordCount = document.createElement("div") ;
const vanBan = alltext.textContent ;
wordCount.innerHTML = `Word count: ${vanBan.split(' ').length}`;
textBox.after(wordCount);

// Thay thế ký hiệu (, - dấu phẩy) => 🤔 và (. - dấu chấm) => 😲
