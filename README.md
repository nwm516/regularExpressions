# Implement Regular Expressions in Express Route Paths
This was for an assignment in my Web Applications & Development class, implementing regular expressions in route paths to handle multiple URL variations.
# Running the Server
I have found two ways in going about this:

<ins>Altering package.json:</ins> Including a "type" : "module" designation, and then additionally "start": "node regularExpressions.js" within the "scripts" identifier of the package.json file allowed me to run "regularExpressions.js" without needing to alter the filename.

"node regularExpressions.js" would successfully run the code with these alterations.

<ins>Running server as is:</ins> Running "regularExpressions.js" as "regularExpressions.mjs" allowed the program to proceed and the server to run successfully. Otherwise, importing express caused errors to occur, citing issues with importing modules from outside.

"node regularExpressions.mjs" would successfully run the code with these alterations.
# Use of regular expressions in the route paths
The main route path in this project is listed as "/user(name)?" in its route definition, with the "?" allowing for the potential of either "/user" or "/username" to be used to reached the same intended destination. Any other route designation, including simply "/name", does not evaluate to the same route, sending the user to the 404 page.
