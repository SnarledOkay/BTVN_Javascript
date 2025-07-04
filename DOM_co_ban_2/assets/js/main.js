let colors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
]

// Render số box = số lượng màu ra ngoài màn hình bằng javascript (5 box)
// Box được tạo bởi thẻ div, có class=“box”, background tương ứng với từng mã màu
let boxLocation = document.querySelector(".boxes") ;
boxLocation.style.display = "flex" ;


colors.forEach(color => {
    const box = document.createElement("div") ;
    box.style.width = "100px"  ;
    box.style.height = "100px";
    box.style.backgroundColor  = color ;
    box.style.margin = "10px";
    box.classList.add("box");
    boxLocation.appendChild(box) ;
    // updateBoxCount();
});

// Cập nhật số lượng total box trong thẻ <span> có class “points”
// Khi bấm vào box bất kỳ thì box đó biến mất, đồng thời số lượng total box giảm đi 1
const totalBox = document.querySelector(".points") ;

const updateBoxCount = () => {
    const currentBox = boxLocation.querySelectorAll(".box").length ;
    totalBox.textContent = currentBox ;
};

const boxes = document.querySelectorAll(".box") ;
boxes.forEach(box => {
    box.addEventListener("click",() => {
        box.remove() ;
        updateBoxCount() ;
    });
});


// Khi click vào nút “more box” thì số lượng box tăng lên 5 (tương ứng với 5 màu trong mảng colors), đồng thời số lượng total box cũng tăng lên 5
const boxButton = document.querySelector(".btn") ;
boxButton.addEventListener("click",()=>{
    colors.forEach(color => {
        const box = document.createElement("div") ;
        box.style.width = "100px"  ;
        box.style.height = "100px";
        box.style.backgroundColor  = color ;
        box.style.margin = "10px";
        box.classList.add("box");
        boxLocation.appendChild(box) ;
    });
    updateBoxCount();
});
