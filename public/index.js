import { Payment } from './classes/Payment.js';
import { Invoice } from './classes/Invoices.js';
import { ListTemplate } from "./classes/listTemplate.js";
// Form
const form = document.querySelector('.new_items');
// List template
const ul = document.querySelector('.item_list');
const list = new ListTemplate(ul);
// Inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    // Prevents the page from reloading once form is submitted
    e.preventDefault();
    let doc; //Has to be structured/or include whatever is in Interface file ie. - Formatter
    if (type.value === 'Payment') {
        // Creating a new class === Payment Class
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        // Creating a new class === Invoice Class
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    // Using render(item:Formatter,header:string,pos: 'start' | 'end') created in ListTemplate.ts 
    //doc == Payment | Invoice 
    list.render(doc, type.value, 'end');
    // console.log(doc)  //Displaying the information/object in console
});
//                    INTERFACE EXAMPLES START
// // Structure that class/ object needs to always follow
// interface Person{
//    name:string,
//    age:number,
//    speak(a : string):void,
//    experience(a : number):number
// }
// // Creating object using above interface  === has to be exactly the same format
// const me:Person = {
//    name:"Marcelle",
//    age:22,
//    speak(text:string):void //make sure other developers also know this needs to be void double checking for myself as well
//    {
//       console.log(text); //Makes sure = void 
//    },
//    experience(years:number):number //make sure other developers also know this needs to be a number double checking for myself as well
//    {
//       console.log('I have', years ,'years of experience');
//       return years;
//    }
// }
// // Creating a Function using Interface
// const greetme = (person: Person)=>{
//    console.log('Hello', person.name)
// }
// //Calling function using the object that was created with the interface structure
// greetme(me);
//                  INTERFACE EXAMPLES END
