let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3
for(let sanPham of products){
    console.log(sanPham.name + " " + sanPham.price + " " + sanPham.brand + " " + sanPham.count) ;
}


// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count
let revenue = products.reduce((total,sanPham) => {
    return total + sanPham.count*sanPham.price ;
},0);

console.log("Tong tien" , revenue) ;

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
let appleProducts = products.filter(sanPham => sanPham.brand == "Apple") ;
console.log(appleProducts);

// 4. Tìm các sản phẩm có giá > 20000000
let findExpensiveProduct = products.filter(sanPham => sanPham.price > 20000000) ;
console.log(findExpensiveProduct) ;

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
let findProProduct = products.filter(sanPham => sanPham.name.includes("Pro")) ;
console.log(findProProduct) ;

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
products.push({name:"Samsung Galaxy Note 9" , price:7000000 , brand: "Samsung" , count:5}) ;
for(let newSanPham of products){
    console.log(newSanPham.name + " " + newSanPham.price + " " + newSanPham.brand + " " + newSanPham.count) ;
} ;

//  7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
let samsungProduct = products.filter(sanPham => sanPham.brand == "Samsung") ;
console.log(samsungProduct);

//  8. Sắp xếp giỏ hàng theo price tăng dần
const priceIncrease = (arr) =>{
    return arr.sort((a,b) => a.price - b.price) ;
}
console.log(priceIncrease(products));

// 9. Sắp xếp giỏ hàng theo count giảm dần
const countDecrease = (arr) => {
    return arr.sort((a,b) => b.count - a.count) ;
}
console.log(countDecrease(products));
