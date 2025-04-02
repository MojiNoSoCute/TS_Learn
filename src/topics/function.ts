export const functiontype = () => {
    //arrow function
    const greet = (name: string, title?: string ): string => {
        return`Hello, ${title || ""} ${name}`;
    }

    // console.log(greet("John Doe"));
    // console.log(greet("John Doe" , "Mr."));

    // function รับ parameter แบบ rest
    const sum = (...numbers: number[]): number => {
        return numbers.reduce((prev, curr) => prev + curr, 0);
    }

    // console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

    //function overloading
  }
