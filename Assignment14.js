//Assignmet 14

//1. Create a function that returns array of employees from a random time from 1 to 2 seconds using async await.
const employeeArray = [
    {
        fName: "Shruti",
        email: "abcd@gmail.com",
        age: 20,
        id: 121,
        salary: 45000
    },
    {
        fName: "Sneha",
        email: "xyz@gmail.com",
        age: 22,
        id: 122,
        salary: 50000
    },
    {
        fName: "Pranay",
        email: "mno@gmail.com",
        age: 33,
        id: 123,
        salary: 62000
    },
];

function checkArray (employeeArray){
  return new Promise((resolve , reject)=> {
      if (Array.isArray(employeeArray)) {
          resolve(employeeArray);
      }
      else{
          reject ("Not an array");
      }
  });
};

function useTimeOut(employeeArray){
    return new Promise((resolve) =>{
        setTimeout(() => {
         resolve(employeeArray);   
        }, Math.random()*1001+1000);
    })
}

async function printArray(employeeArray){
    try {
        await useTimeOut(employeeArray);
        const result = await checkArray(employeeArray);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

printArray(employeeArray);