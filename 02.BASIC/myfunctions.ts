function addTwo(num: number){
  // num.toUperCase() --> if the value type is not defined then it could be a problem.so for specific type function define the value type

  // return num + 2
  return 'hello world'
}

function getUpper(val: string){
  return val.toUpperCase() // here another problem if not assing the value type then if the call is number then how can a number is going to be upercase?so thats why we need to define the value type.
}

function signUpUser(name: string, email: string, isPaid: boolean){} //Problem:there could be multiple value.so if the value type not defined then all values could be same type.


let loginUser = (name: string, email: string, isPaid:boolean=false) => {} // There could be have value type but if not defined any value then define the value like this.

let myValue = addTwo(5)
getUpper('fahim')

signUpUser("shakib khan", "shakib@.com", false)
loginUser('h', 'h@h.com')

export {}