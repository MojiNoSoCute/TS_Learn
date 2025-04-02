export const classObject = () => {

    //การสร้าง class basic

    class Person {

        //สร้าง property
        name: string

        //สร้าง constructor รับค่า
        constructor(name: string) {
            this.name = name
        }

        //สร้าง method
        greet(): string {
            return `Hello, ${this.name}`
        }
    }

    //สร้าง object จาก class
    // const person1 = new Person("John Doe")
    
    // console.log(person1.greet())

    //-----------------------------------------

    class Car {

        private speed: number = 0

        constructor(public brand: string) {}

        accelerate(amount: number): void {
            this.speed += amount
            console.log(`${this.brand} Speed: ${this.speed} km/h`)
        }
    }

    // const myCar = new Car("Toyota")
    // myCar.accelerate(20)

    //------------------------------------------

    class Animal {

        protected name: string

        constructor(name: string) {
            this.name = name
        }

        makeSound(): void {
            console.log("Some generic animal sound")
        }
    }

    class Dog extends Animal {

        private age: number

        constructor(name: string, age: number) {
            super(name)
            this.age = age
        }

        makeSound(): void {
            console.log(`${this.name} says Woof!`)
        }

        getInfo(): string {
            return `${this.name} is ${this.age} years old.`
        }
    }

    // const dog = new Dog("Buddy", 3)
    // dog.makeSound()
    // console.log(dog.getInfo())

        // --------------------------------------------

    // Multiple Inheritance (การสืบทอดหลายคลาส)
    // นก สามารถบินได้
    // ปลา สามารถว่ายน้ำได้
    // เป็ด สามารถบินได้ และ สามารถว่ายน้ำได้

    // สร้าง interface ชื่อ CanFly ที่มี method ชื่อ fly ที่ไม่ return ค่า
    interface CanFly {
        fly(): void
    }
    
    // สร้าง interface ชื่อ CanSwim ที่มี method ชื่อ swim ที่ไม่ return ค่า
    interface CanSwim {
        swim(): void
    }
    
    // สร้าง class Bird ที่ implement จาก CanFly
    class Bird implements CanFly {
        fly(): void {
            console.log("Bird can fly!")
        }
    }
    
    // สร้าง class Fish ที่ implement จาก CanSwim
    class Fish implements CanSwim {
        swim(): void {
            console.log("Fish can swim!")
        }
    }
    
    // สร้าง class Duck ที่ implement จาก CanFly และ CanSwim
    class Duck implements CanFly, CanSwim {
        fly(): void {
            console.log("Duck can fly!")
        }
        
        swim(): void {
            console.log("Duck can swim!")
        }
    }

    // const bird = new Bird()
    // bird.fly() // I can fly!

    // const fish = new Fish()
    // fish.swim() // I can swim!
    
    // const duck = new Duck()
    // duck.fly()  // Duck can fly!
    // duck.swim() // Duck can swim!

    //----------------------------------------

    //Generic ยืดหยุน ประกาศรอไว้ได้

    function identity<T>(arg: T): T {
        return arg
    }

    // console.log(identity<number>(10))
    // console.log(identity(<string>("Hello")))

    function getFirstElement<T>(arr: T[]): T {
        return arr[0]
    }

    // console.log(getFirstElement<string>(["apple", "banana", "cherry"]))
    // console.log(getFirstElement<number>([1, 2, 3]))

    interface Box<T> {
        value: T
    }

    const numberBox: Box<number> = { value: 42 }
    const stringBox: Box<string> = { value: "Hello" }

    // console.log(numberBox.value)
    // console.log(stringBox.value)

    class DataStore<T> {
        private data: T[] = []

        addItem(item: T): void {
            this.data.push(item)
        }

        getItemsData(): T[] {
            return this.data
        }
    }

    // const numberStore = new DataStore<number>()
    // numberStore.addItem(5)
    // numberStore.addItem(10)
    // console.log(numberStore.getItemsData())

    // const stringStore = new DataStore<string>()
    // stringStore.addItem("Hello")
    // console.log(stringStore.getItemsData())

    function printName<T extends { name: string }>(obj: T): void {
        console.log(obj.name)
    }

    // printName({ name: "John" })
    // printName({ name: "Jane", age: 30 })
    // printName({ name: "Doe", address: "123 Main St" }) 

    function combine<T, U>(a: T, b: U): [T, U] {
        return [a, b]
    }

    // console.log(combine<string, number>("Hello", 42))
    // console.log(combine<boolean, string>(true, "World"))

    interface User {
        id: number
        name: string
        email: string
    }

    const updataUser = (user: Partial<User>) => {
        // console.log(user)
    }

    updataUser({name: "john"})

    const user: Readonly<User> = { id:1, name: "Alice", email: "al@mail.com" }

    const userMap: Record<string, User> = {
        "user1": {id: 1, name: "john", email: "err@mail.com"}
    }

    function merge<T, U>(a: T, b: U): T & U {
        return { ...a, ...b }
    }

    const person = merge({ name: "John" }, { age: 30 })
    // console.log(person) // John


}   
