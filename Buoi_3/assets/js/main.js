const grades = [
 {name: 'John', grade: 8, sex: 'M'},
 {name: 'Sarah', grade: 12, sex: 'F'},
 {name: 'Bob', grade: 16, sex: 'M'},
 {name: 'Johnny', grade: 2, sex: 'M'},
 {name: 'Ethan', grade: 4, sex: 'M'},
 {name: 'Paula', grade: 18, sex: 'F'},
 {name: 'Donald', grade: 5, sex: 'M'},
 {name: 'Jennifer', grade: 13, sex: 'F'},
 {name: 'Courtney', grade: 15, sex: 'F'},
 {name: 'Jane', grade: 9, sex: 'F'}
] ;

// console.log(grades) ;

// Viết function tính thứ hạng trung bình của cả lớp
const calculateAvgGrade = (arr) => {
    let sum = arr.reduce(function(total,elem){
        return total + elem.grade ;
    },0) ;
    return sum / arr.length ;
}
console.log(calculateAvgGrade(grades)) ;

// Viết function tính thứ hạng trung bình của nam trong lớp
let maleStudents = grades.filter(student => student.sex === 'M') ;
const calAvgMaleGrade = (arr) => {
    let sumGrade = maleStudents.reduce((total,sinhvien) => total + sinhvien.grade,0) ;
    return sumGrade / maleStudents.length ;
}
console.log(calAvgMaleGrade(grades)) ;

// Viết function tính thứ hạng trung bình của Nữ trong lớp
let femaleStudents = grades.filter(student => student.sex === 'F') ;
const calAvgFemaleGrade = (arr) => {
    let sumGrade = femaleStudents.reduce((total,sinhvien) => total + sinhvien.grade,0) ;
    return sumGrade / femaleStudents.length ;
}
console.log(calAvgFemaleGrade(grades)) ;

// Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp
// Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
// Viết function thứ hạng cao nhất của cả lớp

const getTopStudent = (arr) => {
  return arr.reduce((top, current) => {
    return current.grade > top.grade ? current : top;
  });
};  
console.log("Nam cao nhat lop" , getTopStudent(maleStudents)) ;
console.log("Nu cao nhat lop" , getTopStudent(femaleStudents));
console.log("Cao nhat lop" , getTopStudent(grades)) ;

// Viết function tìm học viên Nam có thứ hạng thấp nhất trong lớp
// Viết function tìm học viên Nữ có thứ hạng thấp nhất trong lớp
// Viết function thứ hạng thấp nhất của cả lớp
const getWorstStudent = (arr) => {
  let worstStudent = arr.reduce((worst,current) =>{
    return current.grade < worst.grade ? current : worst ;
  })
  return worstStudent ;
} ;
console.log("Nam thap nhat lop",getWorstStudent(maleStudents)) ;
console.log("Nu thap nhat lop",getWorstStudent(femaleStudents)) ;
console.log("Thap nhat lop",getWorstStudent(grades)) ;

// Viết function lấy ra danh sách tất cả học viên Nữ trong lớp
console.log("Danh sach hoc sinh nu: ");
for(const hocSinhNu of femaleStudents){
  console.log(hocSinhNu);
}

// Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
console.log("Danh sach hoc sinh theo thu tu bang chu cai:")
const sortStudentName = (arr) => {
  return arr.sort((index , index1) => index.name.localeCompare(index1.name)) ;
};

console.log(sortStudentName(grades)) ;

// Viết function sắp xếp thứ hạng học viên theo chiều giảm dần
console.log("Hoc vien theo diem giam dan: ")
const sortStudentGradeDesc = (arr) => {
  return arr.sort((a,b) => b.grade - a.grade) ;
};

console.log(sortStudentGradeDesc(grades));

// Viết function lấy ra học viên Nữ có tên bắt đầu bằng “J”
// console.log("Hoc sinh nu co ten bat dau bang J:") ;
// const studentStartJ = (arr) => {
//   let targetStudent = grades.filter(() => )
// }



