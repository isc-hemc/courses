"use strict";
var myData = {
    id: 1,
    name: 'David',
    lastname: 'Martínez',
    output: function () {
        return "My id is " + this.id + " my name is " + this.name + " and my lastname is " + this.lastname;
    }
};
console.log(myData.output());
