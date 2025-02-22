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

export{}