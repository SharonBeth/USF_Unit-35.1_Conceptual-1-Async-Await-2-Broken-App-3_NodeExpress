# Broken App Issues

1. added npm init to install node_modules

2. npm install express (not sure if htis was part of the troubleshooting, but thought so because there should have been a node_modules folder)

3. npm install axios (same as #2)

4. Changed line #2 from "let" to "const" becuase this does not change in the code later.

5. Changed line #3 form "var" to "const" because var is nearly depricated and this variable does not change throughout the app.

6. Regarding the url in "return await axios.gt('https...'): 
    a. Copied the url into a firefox browser without the variable "d" and mostly sure that it should not be "/users", but instead "/user".
    b. Also received an error that said it requires authentication.

7. Noticed that line #18- "app.listen" seemed short. It does not show the status that the localhost is ready. I added the line to show the status in the command line.
    Status: This worked.

8. Noticed that maybe app.post should be app.get instead. Tried this next.

    a. Return: 
    
    ReferenceError: err is not defined
    at /home/sharonfahler/usf/Unit-35_Node-Express-1/node-express-1/app.js:14:10
    at Layer.handle [as handle_request] (/home/sharonfahler/usf/Unit-35_Node-Express-1/node-express-1/node_modules/express/lib/router/layer.js:95:5)
    at next (/home/sharonfahler/usf/Unit-35_Node-Express-1/node-express-1/node_modules/express/lib/router/route.js:144:13)
    at Route.dispatch (/home/sharonfahler/usf/Unit-35_Node-Express-1/node-express-1/node_modules/express/lib/router/route.js:114:3)
    at Layer.handle [as handle_request] (/home/sharonfahler/usf/Unit-35_Node-Express-1/node-express-1/node_modules/express/lib/router/layer.js:95:5)
    at /home/sharonfahler/usf/Unit-35_Node-Express-1/node-express-1/node_modules/express/lib/router/index.js:284:15
    at Function.process_params (/home/sharonfahler/usf/Unit-35_Node-Express-1/node-express-1/node_modules/express/lib/router/index.js:346:12)
    at next (/home/sharonfahler/usf/Unit-35_Node-Express-1/node-express-1/node_modules/express/lib/router/index.js:280:10)
    at expressInit (/home/sharonfahler/usf/Unit-35_Node-Express-1/node-express-1/node_modules/express/lib/middleware/init.js:40:5)
    at Layer.handle [as handle_request] (/home/sharonfahler/usf/Unit-35_Node-Express-1/node-express-1/node_modules/express/lib/router/layer.js:95:5)

9. Went back to the url address and removed the "s" on users. And put app.get back to app.post

    Result: it is definitely "users"

10. After much effort using "req.body.developers" I kept getting an empty object, so I found data that contained info on array of objects, of peoples files.


11. TEsting below:

    When I put in at the end of teh function for app.get(/route...):
        res.send("testing")  //returns: "testing" on browser
    
    But when I put in the end of the function for app.get(/route...):
        res.send(results.data.id) //returns an error. It doesn't seem to be able to return variables back to the browser???. 
        After much investigation, I finally realized that this needs to be a string to return to the browser.


    
