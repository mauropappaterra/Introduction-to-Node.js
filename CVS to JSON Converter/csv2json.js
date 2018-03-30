/** CVS to JSON Converter
 *  csv2json.js
 *  Created by Mauro J. Pappaterra on 30 of March 2018.
 */

// Import all necessary modules
const fs = require('fs');  // file system module
const readline = require('readline'); // read line module

const csv2json = (file = 'customer-data') => {

    var all_customers = [];
    var keys = [];
    var no_keys = 0;
    var counter = 0;

    var lineReader = readline.createInterface({
        input: fs.createReadStream(file + '.csv')
    });

    lineReader.on('line', (line, callback) => {

        if (counter == 0){
            keys = line.split(',') // get the keys from the first line
            no_keys = keys.length
            //console.log('\nKeys: ', keys);

        } else {
            var customer_info = line.split(',')
            //console.log(customer_info)

            var customer = new Object()

            for (var i = 0; i <no_keys; i++){
                customer[keys[i]] = customer_info[i]
            }
            //console.log(customer)
            all_customers.push(customer);
        }

        counter ++;
    })

    lineReader.on('close',() => {
        fs.writeFile(file + '.json', JSON.stringify(all_customers,null,' '), (error) => {
            if (error)
                return process.exit(1)
    });
        console.log("CSV file converted to .JSON successfully")
    })
}

csv2json(process.argv[2]);