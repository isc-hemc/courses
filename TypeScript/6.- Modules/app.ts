import * as triangle from './maths/triangle';
import * as circle from './maths/circle';

let circumference: number = circle.circumference(8);
let circleArea: number = circle.area(20);
let triangleArea: number = triangle.area(4, 4);
let pythagorean: number = triangle.pythagorean(3, 3);

console.log(`Circumference: ${circumference}`);
console.log(`Circle area: ${circleArea}`);
console.log(`Triangle area: ${triangleArea}`);
console.log(`Pythagorean: ${pythagorean}`);