import { Formatter } from "../interfaces/formatter.js" 

// Class
export class Invoice implements Formatter{

   // can only do when private,public,readonly is used
   constructor(readonly recipient:string, private details:string, public amount:number,){
   
   };

   format(){
      return `${this.recipient} owes R${this.amount} for ${this.details}`
   }
}