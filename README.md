# 301-assesment
Questions :
1. **How long is the array returned by .map() ? filter?**
map() >>>> the long of an array that returned by map () will be the same length of the origin one unless we pop any thing from it 

filter()>>>> when we use filter () it will create a new array with the element that pass the test so the length of the array depend on the test 


2.**What does the following code do :**
**$('button#primary').on('click' , function(){**
   **placeOrder(shoppingCartItems);**
**})**
 what happen that when we click a button which have  " primary" as id the function placeOrder will run 


3.  **Write a function that takes an array of names as an argument and outputs each name in uppercase to the console** 


function capitalize(arr){
    arr.forEach(value => console.log (value.toUpperCase()));
}