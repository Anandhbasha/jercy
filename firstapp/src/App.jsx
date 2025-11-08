// import { useState } from "react";
// import './App.css'

import { useState } from "react";

// const App = ()=>{
//   let[count,setCount] = useState(0)
//   let [bg,setBg] = useState("light")
//   const handleAdd = ()=>{
//     setCount(++count)
//     console.log(count);
    
//   }
//   const handleBg = ()=>{
//     setBg(bg==="light"?"dark":"light")
//   }
//   return (
//     <div className="App" style={{width:"500px",height:"600px",backgroundColor:bg=="light"?"white":"black"}}>
//       <button onClick={handleAdd}>Count{count}</button>
//       <button onClick={handleBg} style={{backgroundColor:bg=="light"?"white":"black",color:bg=="light"?"black":"white"}}>{bg}</button>
//     </div>
//   )
// }

// export default App

const App = ()=>{
  const [drop,setDrop] = useState(10)
  const employees = [
  { id: 1, name: "Aarav Kumar", age: 25, email: "aarav.kumar@example.com", city: "Chennai", salary: 45000 },
  { id: 2, name: "Sneha Reddy", age: 28, email: "sneha.reddy@example.com", city: "Hyderabad", salary: 52000 },
  { id: 3, name: "Ravi Patel", age: 31, email: "ravi.patel@example.com", city: "Ahmedabad", salary: 61000 },
  { id: 4, name: "Priya Sharma", age: 24, email: "priya.sharma@example.com", city: "Delhi", salary: 48000 },
  { id: 5, name: "Karthik Iyer", age: 29, email: "karthik.iyer@example.com", city: "Bangalore", salary: 57000 },
  { id: 6, name: "Divya Nair", age: 26, email: "divya.nair@example.com", city: "Kochi", salary: 53000 },
  { id: 7, name: "Vikram Raj", age: 33, email: "vikram.raj@example.com", city: "Pune", salary: 64000 },
  { id: 8, name: "Lakshmi Menon", age: 27, email: "lakshmi.menon@example.com", city: "Trivandrum", salary: 55000 },
  { id: 9, name: "Suraj Gupta", age: 30, email: "suraj.gupta@example.com", city: "Jaipur", salary: 60000 },
  { id: 10, name: "Anjali Das", age: 22, email: "anjali.das@example.com", city: "Kolkata", salary: 42000 },
  { id: 11, name: "Rajesh Verma", age: 35, email: "rajesh.verma@example.com", city: "Mumbai", salary: 72000 },
  { id: 12, name: "Pooja Singh", age: 26, email: "pooja.singh@example.com", city: "Bhopal", salary: 51000 },
  { id: 13, name: "Naveen George", age: 32, email: "naveen.george@example.com", city: "Kochi", salary: 61000 },
  { id: 14, name: "Meera Pillai", age: 29, email: "meera.pillai@example.com", city: "Chennai", salary: 56000 },
  { id: 15, name: "Suresh Naidu", age: 34, email: "suresh.naidu@example.com", city: "Hyderabad", salary: 67000 },
  { id: 16, name: "Neha Joshi", age: 23, email: "neha.joshi@example.com", city: "Nagpur", salary: 44000 },
  { id: 17, name: "Anand Krishnan", age: 28, email: "anand.krishnan@example.com", city: "Bangalore", salary: 58000 },
  { id: 18, name: "Shreya Kapoor", age: 25, email: "shreya.kapoor@example.com", city: "Delhi", salary: 47000 },
  { id: 19, name: "Vivek Sharma", age: 31, email: "vivek.sharma@example.com", city: "Pune", salary: 60000 },
  { id: 20, name: "Kiran Rao", age: 30, email: "kiran.rao@example.com", city: "Mumbai", salary: 61000 },
  { id: 21, name: "Deepa Nair", age: 27, email: "deepa.nair@example.com", city: "Kochi", salary: 53000 },
  { id: 22, name: "Manoj Tiwari", age: 35, email: "manoj.tiwari@example.com", city: "Lucknow", salary: 68000 },
  { id: 23, name: "Aditi Sharma", age: 24, email: "aditi.sharma@example.com", city: "Delhi", salary: 46000 },
  { id: 24, name: "Arjun Das", age: 29, email: "arjun.das@example.com", city: "Kolkata", salary: 55000 },
  { id: 25, name: "Rohit Mehta", age: 33, email: "rohit.mehta@example.com", city: "Ahmedabad", salary: 64000 },
  { id: 26, name: "Kavya Iyer", age: 26, email: "kavya.iyer@example.com", city: "Chennai", salary: 52000 },
  { id: 27, name: "Harish Patel", age: 31, email: "harish.patel@example.com", city: "Surat", salary: 59000 },
  { id: 28, name: "Rina Nair", age: 25, email: "rina.nair@example.com", city: "Kochi", salary: 48000 },
  { id: 29, name: "Santosh Kumar", age: 30, email: "santosh.kumar@example.com", city: "Bangalore", salary: 60000 },
  { id: 30, name: "Swathi Menon", age: 27, email: "swathi.menon@example.com", city: "Trivandrum", salary: 54000 },
  { id: 31, name: "Aakash Verma", age: 28, email: "aakash.verma@example.com", city: "Pune", salary: 58000 },
  { id: 32, name: "Lalitha Devi", age: 33, email: "lalitha.devi@example.com", city: "Chennai", salary: 63000 },
  { id: 33, name: "Sameer Gupta", age: 29, email: "sameer.gupta@example.com", city: "Delhi", salary: 57000 },
  { id: 34, name: "Nisha Reddy", age: 24, email: "nisha.reddy@example.com", city: "Hyderabad", salary: 46000 },
  { id: 35, name: "Prakash Bhat", age: 34, email: "prakash.bhat@example.com", city: "Bangalore", salary: 68000 },
  { id: 36, name: "Megha Pillai", age: 27, email: "megha.pillai@example.com", city: "Chennai", salary: 52000 },
  { id: 37, name: "Ajay Raj", age: 32, email: "ajay.raj@example.com", city: "Pune", salary: 61000 },
  { id: 38, name: "Tanya Das", age: 25, email: "tanya.das@example.com", city: "Kolkata", salary: 48000 },
  { id: 39, name: "Ramesh Naidu", age: 36, email: "ramesh.naidu@example.com", city: "Hyderabad", salary: 70000 },
  { id: 40, name: "Geetha Menon", age: 30, email: "geetha.menon@example.com", city: "Kochi", salary: 59000 },
  { id: 41, name: "Mohan Iyer", age: 29, email: "mohan.iyer@example.com", city: "Bangalore", salary: 57000 },
  { id: 42, name: "Ritu Sharma", age: 23, email: "ritu.sharma@example.com", city: "Delhi", salary: 45000 },
  { id: 43, name: "Abhishek Verma", age: 31, email: "abhishek.verma@example.com", city: "Pune", salary: 61000 },
  { id: 44, name: "Pavitra Rao", age: 27, email: "pavitra.rao@example.com", city: "Mumbai", salary: 55000 },
  { id: 45, name: "Gopal Krishnan", age: 35, email: "gopal.krishnan@example.com", city: "Chennai", salary: 67000 },
  { id: 46, name: "Rekha Das", age: 24, email: "rekha.das@example.com", city: "Kolkata", salary: 47000 },
  { id: 47, name: "Hari Prasad", age: 32, email: "hari.prasad@example.com", city: "Hyderabad", salary: 62000 },
  { id: 48, name: "Divakar Nair", age: 30, email: "divakar.nair@example.com", city: "Kochi", salary: 60000 },
  { id: 49, name: "Smitha Raj", age: 26, email: "smitha.raj@example.com", city: "Trivandrum", salary: 52000 },
  { id: 50, name: "Sanjay Mehta", age: 33, email: "sanjay.mehta@example.com", city: "Ahmedabad", salary: 65000 },
];

const theads = employees.map((item)=>Object.keys(item))
let headValue = theads[0]
console.log(headValue);



const dropDownValues = [10,20,30,40,50]

const handleDrop = (e)=>{
  setDrop(e.target.value)
}
  return(
    <div className="App" style={{marginLeft:"200px"}}>
        <select onChange={handleDrop}>
            {dropDownValues.map((item)=>(
                <option>{item}</option>
              )
            )}
        </select>
        <table border={1}>
          <thead>
            {headValue.map((item)=>(
              <th>{item}</th>
            ))}
          </thead>
          <tbody>
            {Object.values(employees).slice(0,drop).map((item)=>(
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>{item.city}</td>
                <td>{item.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}
export default App