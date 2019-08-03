// Generic class: Same as the function, we add the lower than and greater than symbols
// to specify that this is a generic class, in this case we use a constraint (extends number)
// to restrict that this class only uses numbers.
class SimpleMath<T extends number> {
    public base: T;
    public pow: T;

    constructor(base: T, pow: T) {
        this.base = base;
        this.pow = pow;
    }

    powTheBase(): number {
        return (+this.base) ** (+this.pow);
    }
}


let myMath: SimpleMath<number> = new SimpleMath<number>(5, 2);
let pow: number = myMath.powTheBase();
console.log(`5 power by 2 is: ${pow}.`);
