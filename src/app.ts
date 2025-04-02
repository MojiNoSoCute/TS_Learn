// ----------------การ import และ export module-------------------

// การ import ปกติ ผ่านชื่อ module
// import { message as msg, messageTH , hello , welcome as wel } from "./topics/hello"
// เปลี่ยนชื่อ ที่ import มาได้

//import all (not default)
// import * as hey from "./topics/hello"

//import default
// import logMessage from './topics/logger'
//การ import สามารถเปลี่ยนชื่อเป็นอะไรก็ได้
// import log from "./topics/logger"
// import แล้วเปลี่ยนชื่อโดยใช้ as
// import { default as log } from "./topics/logger"

//เรียนใช้งานตัวแปรและฟังก์ชันที่ import มา
// console.log(message)
// console.log(messageTH)
// hello()
// welcome()

// console.log(msg)
// wel()

//เรียกใช้งานฟังก์ชันdefault ที่ import มา
// log("Hello, TypeScript!")

//use import all (not default)
// console.log(hey.message)
// console.log(hey.messageTH)
// hey.hello()
// hey.welcome()

//-------------------------------------------------------------

// import variableType from "./topics/variable_type";

// variableType()

//-------------------------------------------------------------
// import { interfaceandtype } from "./topics/interface_type";

// interfaceandtype()

//-------------------------------------------------------------

//function
// import { functiontype } from './topics/function';

// functiontype()

//-------------------------------------------------------------

//class & object

import { classObject } from './topics/class_object';

classObject()

//-------------------------------------------------------------