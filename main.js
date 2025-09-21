// console.log("Hello");

// hoisting
// var
// let
// const
// // console.log(a);

// var a = 20
// var a = 60
// a=70
// console.log(a);
// // console.log("Hello"+a);
// // let 
// let b=60
// b=80
// console.log(b)
// // const 
// const c =50
// // c=80
// // console.log(c);

// {
//     let f=80
//     console.log(f);
// }
// console.log(f);


// // datatypes
//     //premitive datatypes
//         let a =10
//         // number
//         let user = "arun"
//         // string
//         let isComing = true
//         //boolean
//         let d=undefined;
//         console.log(d)        
//         // undefined
//         // nan - Not an number
//         // null
//         let f = null
//     // non premitive datatypes
//         // array
//             let arr1 = [55,true,undefined,"ajay"]
//             // console.log(arr1);
//             console.log(arr1[0]);
//             console.log(arr1[1]);
//             console.log(arr1[2]);
//             console.log(arr1[3]);

//         // object
//         const person = {
//             names:"abd",
//             age:20,
//             City:"CBE",
//             Address:"5645645gyvhvhvhv",
//             family:{
//                 dad:{
//                     fatherName:"gdfr",
//                     isAlive:false,
//                 },
//                 mom:"hjgh",
//                 siblings:{
//                     brother:"thrf",
//                     sis:"ghfhjbkj"
//                 }
//             }
//         }
        
//         // console.log(person);
//         console.log(person.names);
//         console.log(person.family);
//         console.log(person.family.dad);
//         console.log(person.family.siblings.brother);
        
// functions
// function add(a,b){
//     return a+b    
// }
// add(50,70)
// add(22,44)


// return
// console.log(add(120,211));


// arrow
// const add = (a,b)=>{return a+b}

// console.log(add(120,211));

// operators
    // arithmetic Operators
    //     // +,-,*,/,%,++,--
    //     let num1=10
    //     let num2=3
    //     console.log(num1%num2);

    //     console.log(num1++);
    //     console.log(num1);
    //     console.log(++num1);
    // // comparison Operators
    //     // <,>,<=,>=,==,===

    //     console.log(num1<=12);
    //     console.log(num1>=12);
    //     let newvalue = 10
    //     console.log(newvalue=="10");
    //     console.log(newvalue==="10");
    // // logical
    //     // &&,||,!
    //     console.log(10<15 && 50>55 && num1<13);
    //     console.log(10>15 || 50>55 && num1<13);
    //     console.log(num1!=5);
    // // ternary operator
    //     let age=20
    //     console.log(age>=20?"Adult":"Teenager");
    

    // if else
    let age=12
    if(age>=20){
        console.log("Adult");        
    }else if(age<=19 && age<=13){
        console.log("Child");        
    }
    else{
        console.log("Teeanger");        
    }

    // switch
    let today = "Saturday"
    switch(today){
        case "Monday":
            console.log("Today is Monday")
            break            
        case "Tuesday":
            console.log("Today is Tuesday")
            break            
        case "Wednesday":
            console.log("Today is Wednesday") 
            break           
        case "Thursday":
            console.log("Today is Thursday") 
            break           
        case "Friday":
            console.log("Today is Friday")
            break            
        case "Saturday":
            console.log("Today is Saturday")  
            break          
        default:
            console.log("Today is Sunday")            
    }
    

    // loops
    // while
    let number1 = 10
    // while(number1<15){
    //     console.log("While is working");
    //     number1++
    // }
    // // do while
    // do{
    //     console.log("Dowhile is Working");        
    // }while(10>15)
    // let arr1 = [10,50,88,77,55,23]
    // console.log(arr1[0]);
    // console.log(arr1[1]);
    // console.log(arr1[2]);
    // console.log(arr1[3]);
    // console.log(arr1[4]);
    // console.log(arr1[5]);
    
    // for
    // let arr1 = [10,50,88,77,55,23]
    // let total=0
    //    for(let x=0;x<arr1.length;x++){
    //         total+=arr1[x]
    //    } 
    //    console.log(total);
       
    
        // even number
    //    for(let x=0;x<arr1.length;x++){
    //         if(arr1[x]%2!=0){
    //             console.log(arr1[x]);            
    //         }
    //    } 
    // //for of
    // for(let x of arr1){
    //     console.log(x);        
    // }
    // // for in
    // for(let x in arr1){
    //     console.log(x);        
    // }
    // // for each
    // arr1.forEach((item)=>console.log(item))


    // Jercy
    // J
    // Je

    // Jercy
    // ercy
    // rcy
    // cy
    // y

    // max number
    // palidrome

    // array methods
    let arr1 = [10,50,88,77,6,23]
        // map
        arr1.map((item)=>console.log(item))
        // reduce
        let total = arr1.reduce((x,y)=>x+y)
        console.log(total);
        
        // filter
        console.log(arr1.filter((x)=>x%2!=0));
        
        // push
        arr1.push(101)
        console.log(arr1);
        
        // pop
        arr1.pop()
        console.log(arr1);
        
        // shift
        arr1.shift()
        console.log(arr1);
        
        // unshift
        arr1.unshift(203)
        console.log(arr1);
        
        // indexOf
        console.log(arr1.indexOf(88));
        
        // includes
        console.log(arr1.includes(88));
        
        // find
        let finds = arr1.find((x)=>x==80)
        console.log(finds);
        
        // sort
        let days = ["mon","tues","thurs","sat","sun",]
        // console.log(days.sort());
        // console.log(arr1.sort());
        
        // slice
        console.log(days.slice(0,3));
        
        //splice
        days.splice(2,0,"wed")
        days.splice(4,0,"fri")
        console.log(days);
        
        // spread
        let newArr = [...days,...arr1]
        console.log(newArr);
        

        // rest
        let [first,second,...rest] = days
        console.log(first);
        console.log(second);
        console.log(rest);
        
        // template literals
        let agea = 20
        console.log("He is Above"+agea+"He is Adult");
        console.log(`He is Above ${agea} He is Adult`);
        
        // setTimeout
        // setInterval
        
        
