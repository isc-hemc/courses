let PI = Math.PI;

export function circumference(radius: number): number {
    return 2 * PI * radius;
}

export function area(radius: number): number {
    return PI * (radius ** 2);
}