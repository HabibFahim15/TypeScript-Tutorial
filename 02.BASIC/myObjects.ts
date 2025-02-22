const User ={
  name: 'fahim',
  email: 'fahim@gmail.com',
  isActive: true
}

function createUser({name: string, isPaid: boolean}){}

let newUser={name:'fahim', isPaid: false, email: 'fahim@gmail.com'}

createUser(newUser)

function createCourse() : {name:string, price: number}{
  return {name: 'react.js', price:100}
}

createUser({name:'fahim', isPaid: false})












console.log(createUser(newUser))

console.log(createCourse())

let num=10
function alert(){
  if(num===10){
    return alert()
  }
}
export{}