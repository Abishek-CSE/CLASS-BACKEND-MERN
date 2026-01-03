//Export two functions from a file
export function addtion(a,b){
    return a + b
}
export function Sub(a,b){
    return a-b
}

//Create a default export and import it
function division(c,d){
    return c+d

}
export default division


//Class import 
export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}
