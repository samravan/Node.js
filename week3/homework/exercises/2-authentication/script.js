
/**
 * 2. Authentication
 * 
 * Using node-fetch make an authenticated request to https://restapiabasicauthe-sandbox.mxapps.io/api/books
 * Print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - for basic authentication the username and password need to be base64 encoded
 */
const fetch = require('node-fetch');

async function printBooks() {
  // YOUR CODE GOES IN HERE
  try {
    const url = 'https://restapiabasicauthe-sandbox.mxapps.io/api/books';
    const fetchData = await fetch(url, {
      headers: { 'Authorization': 'Basic YWRtaW46aHZnWDhLbFZFYQ==' }
    });
    const data = await fetchData.json();
    console.log(data);
  }
  catch (error) {
    console.log(error);
  }
}

printBooks();