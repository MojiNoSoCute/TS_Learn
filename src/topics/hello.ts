//สร้างตัวแปร และ export 
const message = 'Hello, TypeScript!';
const messageTH = "สวัสดี TypeScript!";

//การสร้างฟังก์ชัน และ export
function hello() {
    console.log("i'm from hello")
    console.log("สวัสดีจาก hello")
}

function welcome() {
    console.log("Welcome to TypeScript")
    console.log("ยินดีต้อนรับสู่ TypeScript")
}

export { message, messageTH, hello, welcome }
// export ทั้งหมดทีเดียว หรือจะ export ข้างหน้าทีละตัวก็ได้

