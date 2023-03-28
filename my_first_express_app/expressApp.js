const express = require('express')
const app = express()
const organizations_json = require('./organisations.json')
app.use(express.static('public'));

// Table header and style - add border
let table = "<style>table,th,td {border: 1px solid black; border-collapse: collapse;}</style><table> <th> Name:</th> <th>Email</th> <th>Pty_ltd registered</th>"
// Add elements from organisation file to table
for(let i in organizations_json.organisations){
    table+= ("<tr> <td>"+ organizations_json.organisations[i].name+"</td><td>"+ organizations_json.organisations[i].email+"</td><td>"+ organizations_json.organisations[i].pty_ltd +"</td></tr>");
}
// Close tags for the table
table+= "</table>"

// Display Table to page
app.get('/', function (req, res) {
    res.send(table)
})

// If Error, let the user know
app.get('*', function(req, res, next) {
    let err = new Error('Sorry! Can’t find that resource. Please check your URL');
    err.statusCode = 404;
    next(err);
  });

  // Run on localhost 3000
const PORT = process.env.PORT || 3000;

// Listen to port
app.listen(PORT, () => {
console.log(`Server is listening on port ${PORT}`);
});
