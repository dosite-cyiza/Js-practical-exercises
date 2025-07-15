/*
3. Events
Delete the code in script.js from the previous exercise; we do not need it anymore.
Create a new function called attachBuyEvents().
Call the attachBuyEvents() function like this:
function attachBuyEvents() {
  // ... function body
}

attachBuyEvents()
Inside that function, select all buttons in the products section and use the addEventListener method to attach a click event to each one so that when the user clicks the button, another function is called (this can be an anonymous function). For example:
button.addEventListener('click', function() {...function code goes here...})
Make the function responding to the buy events print 'BUY!' in the console; test it.
Make the function responding to the buy events print the event target in the console; test it.
One way of doing it is to add a parameter to the function that receives an Event object:
  function(e) {
    console.log(e.currentTarget)
  }
The other is to print this:
function() {
  console.log(this)
}
Hover your mouse pointer over the element printed in the console. You should see the clicked button light up on the web page.
What did I learn:

How to attach events to HTML elements.
How to access the event that was fired using a parameter in the event handler function.
How to access the element that fired the event using this or event.target.




*/

const attachBuyEvents =() =>{
const button = document.querySelectorAll("#products button")
console.log(button)

button.forEach((btn) =>{
    btn.addEventListener('click',(e) =>console.log(e.currentTarget)
)
})
}
attachBuyEvents()