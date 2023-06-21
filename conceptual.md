### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
    Async/await, promises, .then/.catch errors

- What is a Promise?
    It is a proxy (an object that wraps a an object or function) and monitors it until the response comes back. This may be resolved or rejected, but it still waits until this response comes back to guarantee that there is an answer.  

- What are the differences between an async function and a regular function?
    Async functions call out for information, but allows for other functions in the code to move one without waiting for this async function to finish the promise. 
    A regular function has to be completed before it can move on to other lines of code.

- What is the difference between Node.js and Express.js?
    Node.JS is the enviornment in which the express.JS can work. Express.JS is a framework layered ontop of JavaScript. It has added syntax and is meant to shorten the JS code by simplifying it.

- What is the error-first callback pattern?
    It executes a function after the async operation ends and takes the first argument as an error, if one occurred, and the result of the request as teh extra arguments.
- What is middleware?
    This is a request handler with access to the application's request-response cycle. For instance, middleware allows for breaking up functions to send ot other files for further execution to minimize code writing.
- What does the `next` function do?
    If a function ends, but has next in it, it will move on to the next line in the code (usually another function).
- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
1. The name for each person is hard coded both in the url and as the constant. Instead, it may be entered through the argument of the function and or more of a general variable name.
2. The url base name can be condensed into one constant variable.
3. The Promise.all  can be used above to call for each and wait for all of htem to come back. 

***********************It is unclear to me if there is an advantage to this over the above code or jsut another way to write it, but would like to discuss this for sure.
