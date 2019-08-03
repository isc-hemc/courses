// A Method Decorator is declared just before a method declaration. The decorator is
// applied to the Property Descriptor for the method, and can be used to observe, modify,
// or replace a method definition. A method decorator cannot be used in a declaration file,
// on an overload, or in any other ambient context (such as in a declare class). For this
// example, we attach some metadata to make a function editable.

// For more information see the PropertyDescriptor documentation.

function editable(value: boolean) { // Decorator Factory.
    return function(target: any, propName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    }
}

class Project {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    @editable(false)
    changeName() {
        console.log('Project name: Burrobot.');
    }
}

const project: Project = new Project('Burrobot');
project.changeName();

// Trying to edit the changeName function.
project.changeName = function() {
    console.log('Project name: Other name.');
};
project.changeName();