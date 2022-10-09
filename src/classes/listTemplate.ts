import { Formatter } from "../interfaces/formatter";

export class ListTemplate{

   //CREATING ELEMENT FOR HTML
   constructor(private container: HTMLUListElement){};
    
   //Whatever needs to be passed in first = item ; will need to click with Formatter (Interface = Formatter) 
   render(item:Formatter,header:string,pos: 'start' | 'end'){

      const list = document.createElement('li');

      const h4 =document.createElement('h4');
      
      //Takes in header:string from whats being rendered
      h4.innerText = header;

      list.append(h4); //So it goes inside the Li

      const text =document.createElement('p');

      //The paragraph will then display what was written in the format() = `${this.recipient} is owed R${this.amount} for ${this.details}`
       text.innerText= item.format();
   

       list.append(text);

       if (pos === 'start') {
         //The container we made with HTMLUListElement Line 6
         this.container.prepend(list); //prepend means to start
       }else{
         this.container.append(list)
       }
   };

}