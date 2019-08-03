// TypeScript can't access properties the way it thoes with methods, so to change a
// property behavior we use a PropertyDecorator.

function overwritable(value: boolean) { // Decorator Factory.
    return function(target: any, propName: string): any {
        const descriptor: PropertyDescriptor = {
            writable: value
        };
        return descriptor;
    }
}

class Project {
    @overwritable(true)
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const project: Project = new Project('Burrobot');
console.log(project);
