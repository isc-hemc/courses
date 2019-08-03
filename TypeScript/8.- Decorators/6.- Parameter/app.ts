// A Parameter Decorator is declared just before a parameter declaration.

function parameterInfo(target: any, methodName: string, paramIndex: number) {
    console.log(target);
    console.log(methodName);
    console.log(paramIndex);
}

class Course {
    public students: string[] = ['David', 'Carlos'];

    printStudents(param1: any, param2: any, @parameterInfo param3: any, param4: any) {
        console.log(this.students);
    }
}

const course: Course = new Course();
course.printStudents('param1', 'param2', 'param3', 'param4');