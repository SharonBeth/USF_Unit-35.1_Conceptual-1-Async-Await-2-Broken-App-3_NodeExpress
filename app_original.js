const express = require('express');
let axios = require('axios');
var app = express();

app.use(express.json());

app.post('/', function (req, res, next) {
  try {
    console.log(req.body.developers)

    let results = req.body.developers.map(async d => {
      await axios.get(`https://api.github.com/users/${d}`)
        .then(function (res) {
          console.log(res.data)
        })
    });
    console.log(res.body + "res data")
    let out = results.map(async r => {
      await r
      console.log(r.promise)
      return ({ "name": r.data.name, "bio": r.data.bio })
    });

    // return 
    res.send(JSON.stringify(out));
  } catch (err) {
    next(err);
  }
});

app.listen(3000, function () {
  console.log(`Server starting on port 3000`);
});


// { "developers": ["joelburton", "elie"] }
// 
// [
  // {
    // "bio": "Open source developer. Former dev at Apple...",
    // "name": "Joel Burton"
  // },
  // {
    // "bio": "Co-founder + Lead Instructor @rithmschool ",
    // "name": "Elie Schoppik"
  // }
// ]
// 
// 



