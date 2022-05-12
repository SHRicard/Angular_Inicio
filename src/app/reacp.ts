const username : string = "Ricardo";

const sum = (a: number, b: number) =>{
    return a + b
}
sum (1 , 5);
// class Persona {
// age : number ;
// lastName : string ;
// constructor ( age:number, lastName : string){
//     this.age=age
//     this.lastName = lastName
// }

// }
class Persona {
 constructor ( public age:number, public lastName : string){}
}



const ricardo = new Persona( 31 , "Ramirez")
ricardo.age


