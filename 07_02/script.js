/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let item = "flashlight";

const collection = ["Piggy", item, 5, true];

collection[2] = "camera";
collection[3] = "bag";
collection[collection.length] = "new item";
collection[4] = "spray";
collection[10] = "dropper";
console.log(collection);
