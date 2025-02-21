function addTwo(num: number): number{
  // num.toUperCase() --> if the value type is not defined then it could be a problem.so for specific type function define the value type

  return num + 2
  // return 'hello world'
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

function getValue(myVal: number): boolean{
  if(myVal > 5){
    return true
  }
  return false
}


const getHello =(s: string):string =>{
 return ''
}

const heros = ["thor", "spiderman", "ironman"]
// const heros = [1, 2, 3]

heros.map((hero): string =>{ //function type not neccessary in map
  return `hero is ${hero}`
})


function consoleError(errmsg: string): void{
  console.log(errmsg);
}
function handleError(errmsg: string): never{
  throw new Error(errmsg);
}

export {}