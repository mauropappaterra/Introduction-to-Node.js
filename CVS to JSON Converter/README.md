<h1>CVS to JSON Converter</h1>

<i><b>1. Walk us through the design of your project. Why did you design your project the way you did? What difficulties did you overcome?</i></b><br>

In order to solve this task I used the library readline that reads an external file line by line. The user will call the main script on the console giving the path to the file an argument, if not file is given the default file is customer-data.CSV as provided for the activity. I created 4 variables, an array that will contain all customers (and that will be transformed into JSON object at the end), and array keys that will read the first line and save the key values for all the remaining customers (lines) on the external file, and two counters one for the keys on each element and one for each customer on the given file. I initialize the line reader module as indicated on the API, then on the first line I retrieve the key values from the very fist line ox the external file and save the names to the array using the function split(','), I also store the number of keys per object that is equal to the length of the array we just created. For the remaining lines I use the same method .split(',') to get the values and create a temporary JavaScript object (that conveniently has the same structure as a JSON object) for each customer. Each customer is saved to the array all_customers. Once all the lines are read, it is time to close the line reader element and to write the array all_customer to an external file. To do this I use the function JSON.stringify() and of course the file system module fs.<br> I overcome most difficulties using StackOverflow and Googgle to find API information on the different modules and solve issues. <br><br>

<i><b>2. How did you test your project to verify that it works?</i></b><br>

I run my project locally and I used console.log() calls to print the contents of variables. I also used debugging tools from my IDE (WebStorm).<br><br>

<i><b>3. Let us know if anything doesn't work as intended so your reviewer will know ahead of time</i></b><br><br>
I get the following error message '(node:7596) [DEP0013] DeprecationWarning: Calling an asynchronous function without callback is deprecated.' but the file is converted successfully!<br><br>
