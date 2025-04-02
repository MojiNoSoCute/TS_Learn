export default function variableType() {
  //ชนิดข้อมูลใน TypeScript มีทั้งหมด 3 กลุ่ม
  // 1. Primitive Types (ชนิดข้อมูลพื้นฐาน)
  // 2. Advanced Types (ชนิดข้อมูลขั้นสูง)
  // 3. Special Types (ชนิดข้อมูลพิเศษ)

  // 1. Primitive Types (ชนิดข้อมูลพื้นฐาน)
  // 1.1 number
  const age: number = null;
  const pi: number = 3.14;
  const price: number = 100.5;
  const score: number = -35;

//   console.log(age);
//   console.log(pi);
//   console.log(price);
//   console.log(score);

  // 1.2 string
  const fname: string = "John Doe";
  const address: string = "123 Main St, City, Country";
  const message: string = `Hello, ${fname}. Welcome to TypeScript!`;

//   console.log(fname);
//   console.log(address);
//   console.log(message);

  //1.3 boolean
  const isAdult: boolean = true;
  const isStudent: boolean = false;

//   console.log(isAdult);
//   console.log(isStudent);

  //2 Advanced Types (ชนิดข้อมูลขั้นสูง)
  //2.1 array
  const numbers: number[] = [1, 2, 3, 4, 5];
  const names: string[] = ["John", "Jane", "Doe"];
  const people: Array<string> = ["Alice", "Bob", "Charlie"];
  const isAdults: boolean[] = [true, false, true];

  console.log(numbers[4]);
  console.log(names[1]);
  console.log(people[2]);
  console.log(isAdults[1]);

  //2.2 tuple
  const person: [string, number] = ["John Doe", 30];

  console.log(person[0]);
  console.log(person[1]);

  //2.3 enum
    enum Color {
        Red ,
        Green,
        Blue,
    }  

    const color: Color = Color.Green;

    console.log(color)

    //2.4 Object
    const user: { name: string; age: number } []= [
    {
        name: "John Doe",
        age: 30,
    },
    {
        name: "Jane Doe",
        age: 25,
    }
    ];

    console.log(user[0].name, user[0].age);
    console.log(user[1].name, user[1].age);

    //3 Special Types (ชนิดข้อมูลพิเศษ)
    //3.1 any

    let  data: any = 10
    data = "Hello"
    data = true

    console.log(data)

    //3.2 void
    const greet = (): void => {
        console.log("Hello, TypeScript!")
    }

    greet()

    //3.3  never
    const error = (message: string): never =>{
        throw new Error(message)
    }

    // error("Error message")

    //3.4 unknown
    let userInput: unknown
    let userName: string
    
    userInput = 30
    userInput = "John Doe"
    

    typeof userInput === "string" ? userName = userInput : error('Invalid input')

}

