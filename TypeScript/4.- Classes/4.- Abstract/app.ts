// An abstract class needs inherited and provides a base class.

abstract class Project {
    public name: string = 'Default';

    abstract changeName(name: string): void;
    public download() {
        console.log('Its downloaded!');
    }
}

class TT extends Project {
    changeName(name: string): void {
        this.name = name;
    }
}

let tt = new TT();
console.log(tt);
tt.changeName('Burrobot');
console.log(tt);
tt.download();