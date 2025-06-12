// Yêu cầu: 
// Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 5 ký tự trong đoạn văn (background = “yellow”)
const allText = document.querySelector(".text");

// Step 1: Get the full paragraph text
const words = allText.textContent.split(/\b/); // split by word boundaries

// Step 2: Rebuild HTML with long words wrapped in a span
const highlightedHTML = words.map(word => {
  return word.length > 5 && /\w/.test(word)
    ? `<span style="background-color: yellow">${word}</span>`
    : word;
}).join("");

// Step 3: Replace the original content with highlighted HTML
allText.innerHTML = highlightedHTML;


// Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p

// Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ

// Thay thế ký hiệu (, - dấu phẩy) => 🤔 và (. - dấu chấm) => 😲
