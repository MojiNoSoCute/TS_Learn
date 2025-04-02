export const interfaceandtype = () => {

    //ตัวอย่างการสร้าง interface
    // interface User {
    //     name: string;
    //     age: number;
    // }

    //merge interface
    // interface User {
    //     gender: string;
    // }

    // const user: User = {
    //     name: "John Doe",
    //     age: 30,
    //     gender: "Male"
    // }

    //การสืบทอด interface
    // interface Admin extends User {
    //     isAdmin: boolean;
    // }

    // console.log(user.name, user.age, user.gender);

    // const admin: Admin = {
    //     name: "Jane Doe",
    //     age: 25,
    //     gender: "Female",
    //     isAdmin: true,
    // }

    // console.log(admin.name, admin.age, admin.gender, admin.isAdmin);

    //ตัวอย่างการสร้าง type
    type Person = {
        name: string;
        age: number;
    }

    //Union Type
    type Role = Person & { isAdmin: boolean };

    //สร้าง object จาก type
    const person: Role = {
        name: "John Doe",
        age: 30,
        isAdmin: true,
    }

    // console.log(person.name, person.age, person.isAdmin);

    // type with interface
    // type Roles = "admin" | "user" | "guest";

    // interface User {
    //     id: number
    //     name: string;
    //     role: Roles
    // }

    // const user: User = {
    //     id: 1,
    //     name: "John Doe",
    //     role: "admin"
    // }
}