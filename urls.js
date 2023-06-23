const fs = require('fs');
const process = require('process');
const axios = require('axios');
const url = require('url');

const { json } = require('express');

//  example below:
//  node step3.js --out new.txt one.txt
// process.argv[0] = Run Node.JS
// process.argv[1] = step3.js (The file to run in Node.JS environment)
// process.argv[2] = Command that can be defined in JS file
// process.argv[3] = Create a new file named new.txt
// process.argv[4] = pull the data from one.txt and put it into the nexly created file n


//Today's homework structure:
// node urls.js FILENAME
// process.argv[0] = Run Node.JS
// process.argv[1] = urls.js (The file to run in Node.JS environment)
// process.argv[2] = FILENAME: This homework file name is urls.txt, and its contents will be read and copied for processing elsewhere. See Homework description for full details.

let runFile = process.argv[1]
let data2 = process.argv[2]
function writeToFile(data, out) {
    // json.stringify(data)
    fs.writeFile(out, data, 'utf8', function (err) {
        if (err) {
            console.log(err);
            process.exit(1);
        } else {
            console.log("File was written: " + out)
        }
    });
    // fs.writeFile(out, data, 'utf8', function (err) {
    // if (err) {
    // console.log(`${err} error on fs.writeFile`);
    // process.exit(1);
    // } else {
    // console.log(`Wrote to ${out}.`)
    // }

}












// async function webCat(line, fileName) {
// try {
// let resp = await axios.get(line);
// let data = resp.data
// console.log("data" + data + "data")
// console.log(fileName + "fileName")
// writeToFile(data, fileName)
// } catch (err) {
// console.log(`Couldn't download ${line}`)
// }
// }

// const testing = fs.readFile(data2, 'utf8', (err, data) => {
// if (err) {
// console.error(('Error'))
// } else {
// console.log(data + "data")
// writeToFile(data, "filename.js")
// }
// })
//
let lineArr = [];
let fileNameArr = [];

// 
// for (let i = 0; i < lineArr.length; i++) {
// axios
// .get(lineArr[i])
// .then(p1 => {
// newPromise.push(p1.data)
// return axios.get()
// })
// }
// axios
// .get()
function starter() {
    const testing2 = fs.readFileSync(data2, 'utf8');

    testing2.split(/\r?\n/).forEach(line => {
        console.log(`Line from file: ${line}`)
        let q = url.parse(line, true);
        lineArr.push(line);
        fileNameArr.push(q.host)

        // console.log(fileName + "fileName")
        // webCat(line, fileName)

    })
}

starter()

console.log(lineArr)
console.log(fileNameArr)

let webCatPromiseArr = [];

for (let i = 0; i < lineArr.length; i++) {
    webCatPromiseArr.push(
        axios.get(lineArr[i])
            // .then(response => console.log("at [i] of axios response"))
            .then(response => response.data)
            .catch(error => {
                console.log(`Error: From for-let Loop ${lineArr[i]}:${error.message} `)
            }
            )
    )
}

Promise.all(webCatPromiseArr)
    .then(eachData => {
        let i = 0;
        eachData.forEach(p => {
            if (p !== undefined) {
                // console.log(p + " This is the eachData This is the each data")
                writeToFile(p, fileNameArr[i])

            }
            i = i + 1;
        })
    })
    .catch(error => {
        console.log(`Error: Error fetching data from ${error.message} `)
    })

