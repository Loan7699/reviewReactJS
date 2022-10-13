// // 1. Cookies
// document.cookie = `name=Loan; expires=${new Date('2022-09-26 10:00:00').toUTCString()}`
// document.cookie = "greeting=Hello World";

// console.log(document.cookie)

// 2. Local Storage: nhận cặp giá trị key, value
// - lưu trữ DL
localStorage.setItem('name', 'Phuong Loan')
localStorage.setItem('age', 23)

// - đọc DL lưu trữ: nhận tham số key
console.log(localStorage.getItem('name')) // Phuong Loan
console.log(localStorage.getItem('abc')) // key ko tồn tại => null

// - Cách lưu trữ DL dạng object: convert obj-string s/d JSON.stringify, sau đó để get data convert string-obj s/d JSON.parse
let user = {
    name: 'Phuong Loan',
    age: '23'
}
localStorage.setItem('user',  JSON.stringify(user))
console.log(JSON.parse(localStorage.getItem('user')))

// - xóa DL
localStorage.removeItem('age')

// - xóa tất cả DL trong local storage
localStorage.clear()

// 3. Session Storage: có các pthuc giống local storage
sessionStorage.setItem('name', 'Phuong Thao')
