export const asyncpromises = () => {
    
    //ตัวอย่างการใช้ Promise
    function simulateNetworkRequest(shouldSuccess: boolean): Promise<string> {
        //Pending status
        //when create a promise it will be in pending status
        console.log("Pending...")

        return new Promise((resolve, reject) => {

            // จำลองการทำงานที่ใช้เวลา 2 วินาที
            setTimeout(() => {
                if (shouldSuccess) {
                    console.log("Resolved!")
                    // Fulfilled status
                    resolve("Success!")
                } else {
                    console.log("Rejected!")
                    // Rejected status
                    reject(new Error("Can't connect to server"))
                }
            }, 2000)
        })

    }

    // ตัวอย่างการทำงานกับ Promise แบบที่สำเร็จ
    // simulateNetworkRequest(true)

    // simulateNetworkRequest(false)

    //่ตัวอย่างการใช้ then catch
    function promiseChainExample() {
        simulateNetworkRequest(true)
        .then((result) => {
            console.log("Result:", result)
        })
        .then(() => {
            console.log("ทำงานต่อจากการทำงานแรก")
        })
        .catch((error) => {
            console.error("Error:", error)
        })
        .finally(() => {
            console.log("Request completed.")
        })
    }

    promiseChainExample()
}