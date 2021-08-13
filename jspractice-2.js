// // "use strict"
//  let arr1=[1,2,3]
// // let arr2=[4,5,6]

// // //let arr=arr1.concat(arr2);

// // let arr=[...arr1,...arr2];




// let maxnum=Math.max(...arr1);
// let sport=["cricket","football"];

// for(k:sport){
//     console.log(k)
// ;}
//---------------------------------------------------------------

// function display(n1, n2, n3, n4) {
//     console.log(n1)
//     console.log(n2)
//     console.log(n3)
//     // console.log(arguments)
// }

// display(4);
//----------------------------------------------------

// let a1=[5,6,7];
// let a2=[6,8,4];

// let a3=[...a1,99,00,...a2];

// let max=Math.max(...a1);

//a3.sort();
//-------------------------------


// let o1={x:1,y:2};
// let o2={y:20,z:10};

// let o={...o1,...o2};
//------------------------------------------------------------
// function f(a,b,...rest){
//     console.log(a)
//     console.log(b)
//     console.log(rest)
// }

// let data =[1,3,5,6,7,8,9];

// f(...data);
//--------------------------------------------------------
//obj dis-structuring
// let cricketer = {
//     name:"vk",
//     age:30,
//     jeyseyno:18,
//     team:"india"
// }


// let name=cricketer.name;
// let age=cricketer.age;
// let t=cricketer.team;

// or we have another to get details

//let {name:cname,age:Age,jerseyno:jno,team:t}=cricketer

//or if we have same name as declared in the obj we can write


//let{name,age,jerseyno,team}=cricketer

//let {name,age}=cricketer
//let a=cricketer.team;
//------------------------------------------------------------------------
//array dis struc

// let n=[55,5,6,8,2,3,7,32,9];
// //let n1=n[4];
// //or

// let [n1,n2,n3,n4,n5,n6,n7,n8,n9]=n
//-------------------------------------------------------------
//iterator

// let mobcompanies= ["samsung","vivo","oppo","apple","oneplus"];

// // let c=mobcompanies[Symbol.iterator]()
// // console.log(c.next());
// // console.log(c.next());
// // console.log(c.next());

// //or we can use for-loop

// for(let companies of mobcompanies){
//     console.log(companies)
// }

//-------------------------------------------------------------
//custom iterable

// let nGenerator= {
//     [Symbol.iterator]:function(){
//         let num=0
//         return {
//             next:function(){
//                 console.log('next()')
//                 num++
//                 let value=num<=10 ? num:undefined
//                 let done=num<=10 ?false:true
//                 return {value,done}
//             }
//         }
//     }
// }

// for(let num of nGenerator){
//     console.log(num)
// }

let array1 = [1,2,3];
let array2 = [2,3,4];
let arrayresult = array1.filter(n=> array2.includes(n));
console.log(arrayresult);


























