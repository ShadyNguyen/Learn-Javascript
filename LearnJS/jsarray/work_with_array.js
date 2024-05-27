
// Làm việc với Array

// 1.Tostring
// 2.Join
// 3.Pop
// 4.Push
// 5.Shift
// 6.Unshift
// 7.Splicing
// 8.Concat
// 9.Slicing

var languages = [ // khai báo cách 1
    'RUBY',
    'PHP', 
    'Reactjs', 
    'Angular',
];

console.log(languages.toString()); 
// chuyển từ array sang kiểu string

console.log(languages.join('-')); 
// thêm phần từ trong () vào giữa mảng VD: join('-') => ruby - php - reactjs - angular

console.log(languages.pop()); 
// xóa elements cuối mảng và trả về phần tử đã xóa

console.log(languages.push('Nodejs')); 
// đẩy thêm phần tử vào cuối mảng và trả về mảng mới có phần từ đã thêm vào

console.log(languages.shift()); 
// xóa elements đầu mảng và trả về phần tử đã xóa

console.log(languages.unshift('Mysql')); 
// thêm phần từ mới vào đầu mảng và trả về mảng mới có phần tử đã thêm vào

// console.log(languages.splicing('English')); 
// chuyển từ array sang kiểu string

// console.log(languages.concat()); 
// chuyển từ array sang kiểu string

// console.log(languages.slicing()); 
// chuyển từ array sang kiểu string
