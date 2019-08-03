// To create a custom type use the reserved word 'type'.
type myType = {
    id: any,
    name: string,
    lastname: string,
    output: () => string
};

let myData: myType = {
    id: 1,
    name: 'David',
    lastname: 'Martínez',
    output: function(){
        return `My id is ${this.id} my name is ${this.name} and my lastname is ${this.lastname}`
    }
};

console.log(myData.output());