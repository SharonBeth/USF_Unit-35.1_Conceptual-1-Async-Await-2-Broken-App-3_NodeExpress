const express = require('express');
const axios = require('axios');
const app = express();
const ExpressError = require('./expressError');
const { test } = require('node:test');

// app.get('/', function (req, res, next) {
// try {
// let results = req.body.developers.map(async d => {
// return await axios.get(`https://api.github.com/users/${d}`);
// });
// let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));
// console.log(req.body)
// console.log(res.body)
// return res.send(JSON.stringify(out));
// } catch {
// next(err);
// }
// });
// 
app.use(express.json());
console.log("testing");

const DEVELOPERS = [
  { "Name": "Sharon-Test", "Bio": "Student-USF" }
]
app.post('/', function (req, res, next) {

  // const userName = req.body.developers.map(async function (element) {
  // return { "Name": element }
  // });

  const userName = req.body.developers.map(async function (element) {
    return await axios.get(`https://api.github.com/users/${element}`)
  });

  Promise.all(userName)
    .then(newArr => (
      newArr.forEach(p => console.log(p))
    ))
  console.log(userName)
  // console.log(arrayToObject)
  // res.json(arrayToObject)

  //**********************************Top*************
  // let results.map = await axios.get(`https://api.github.com/users/${userName}`)
  //**********************************Bottom**********

  // console.log(results.body + "results.body");
  // console.log(results.data)
  // let arr = results.data
  // const foundItem = results.find((v => v.login === "errfree"))
  // const url = foundItem.url;
  // let secondArr = await axios.get(url);

  //**********************************Top***********
  console.log(userName.data.name + " userName")
  let name = userName.data.name;
  let bio = userName.data.bio;
  DEVELOPERS.push({ "Name": name, "Bio": bio })
  //**********************************Bottom**********


  // console.log((JSON.stringify(req.body.userName)) + " req.body")
  // console.log(JSON(req.body.userName))
  // console.log(secondArr.data.id)
  // console.log(res + "res")
  // console.log(req + "req")
  console.log(DEVELOPERS)
  // res.end(JSON.stringify(results.data.name));

  //**************************************This section shows examples of a app.get route even though the route may say app.post above***********************
  //This below code sends back, object Object, where as look a couple lines below that
  // res.send(`${DEVELOPERS}`)

  //thsi below code sends back acknowledged as an object even though it is a string to the naked eye:
  // res.json('blablabla')

  //This below code sends back an array of objects:
  res.json(DEVELOPERS)


  //This below code sends back and array of objects, because hte variable is set up as an array of objects:
  // res.send(DEVELOPERS)

  //***********************************************close examples of app.get value return lines of res.send & res.json**************************************
  // 
})
// app.post('/', function (err, req, res, next) {
// try {
// let results = req.body.developers.map(async d => {
// return await axios.get(`https://api.github.com/users`);
// });
// let out = results.find(r => ({ name: r.data.name, bio: r.data.bio }));

// return res.send(JSON.stringify(results));
// } catch {
// next(err);
// }
// });

// Tested app.get, and was getting the object of all things returned in the Ubuntu-shell:
// app.get('/', async function (req, res, next) {
// await axios.get(`https://api.github.com/users`).then(function (res) {
// console.log(res.data);
// })
// test
// })

// app.use(function (req, res) {
// return new ExpressError("Not Found", 404);
// });

// generic error handler
app.use(function (err, req, res, next) {
  // the default status is 500 Internal Server Error
  let status = err.status || 500;

  // set the status and alert the user
  return res.status(status).json({
    error: {
      message: err.message,
      status: status
    }
  });
});

// app.get('/test', function (req, res, next) {
// $.getJSON("https://api.github.com/users/")
// console.log(res.body)
// });

app.listen(3000, function () {
  console.log(`Server starting on port 3000`);
});




