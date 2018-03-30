/** CVS to JSON Converter
 *  csv2json.js
 *  Created by Mauro J. Pappaterra on 30 of March 2018.
 */

// Import all necessary modules
const fs = require('fs');  // file system module
const readline = require('readline'); // read line module

const csv2json = (csv_file = 'customer-data.csv') => {

    var all_customers = [];

    var lineReader = readline.createInterface({
        input: fs.createReadStream(csv_file)
    });

    lineReader.on('line', function (line) {
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
}

csv2json(process.argv[2]);

