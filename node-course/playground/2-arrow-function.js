// const square = function(x){
// return x*x
// }
// const square =(x) =>{
//     return x*x
// }

// const square = (x) => x*x
// console.log(square(2))

const event = {
    name: 'WWE',
    guestList: ['Andrew', 'jen', 'mike'],
    printGuestList(){
        console.log('Guest List For ' + this.name)

        this.guestList.forEach((guest) =>{
            console.log(guest +' is Attending ' + this.name)
        })
    }
}

event.printGuestList()