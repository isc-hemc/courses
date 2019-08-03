// Since x and y are protected and private respectively we can't access them from outside.

// Private: members are only accessible within their declaring class.
// Protected: members are only accessible within their declaring class and classes derived from it.
// Public: members can be accessed anywhere.
class Point {
    protected x: number;
    private y: number;
    public z: number;

    constructor(x: number = 0, y: number = 0, z: number = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public getX() { return this.x; }
    public getY() { return this.y; }
    public setX(x: number) { this.x = x; }
    public setY(y: number) { this.y = y; }
}

let myPoint: Point = new Point(22, 24, 17);
console.log(`X axis: ${myPoint.getX()}`);
console.log(`Y axis: ${myPoint.getY()}`);
console.log(`Z axis: ${myPoint.z}`);
