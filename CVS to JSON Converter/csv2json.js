/** CVS to JSON Converter
 *  csv2json.js
 *  Created by Mauro J. Pappaterra on 30 of March 2018.
 */

const fs = require('fs');  // file system module
const path = require('path'); // path module
const readline = require('readline');

var lineReader = readline.createInterface({
    input: fs.createReadStream(path.join(__dirname,'customer-data.csv'))
});

var all_customers = [];

lineReader.on('line', all_customers, function (line) {
    //console.log('\ncustomer: ', line);
    var temp = line.split(',');
    var customer = {
        'id': temp[0],
        'first_name': temp[1],
        'last_name': temp[2],
        'email': temp[3],
        'gender': temp[4],
        'ip_address': temp[5],
        'ssn': temp[6],
        'credit_card': temp[7],
        'bitcoin': temp[8],
        'street_address': temp[9]
    };
    //console.log(temp)
    //console.log(customer)
    all_customers.push(customer);
});

console.log(all_customers);

/*
fs.writeFile('customer-data.json', JSON.stringify(all_customers), function (error) {
    if (error) return console.error(error)
    console.log('Writing is done.')
})
*/
