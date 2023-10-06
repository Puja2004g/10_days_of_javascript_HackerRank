/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon{
    constructor (n){
        this.n=n;
    }
    
    perimeter(){
        let sum=0;
        return this.n.reduce((sum,n)=>sum+n);
    }
}
// .reduce(): The reduce method is a built-in JavaScript array method used for reducing an array to a single value. It takes a callback function as an argument.
// The callback function (sum, side) => sum + side is executed for each element in the array.


const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());