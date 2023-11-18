async function register(){
 /*
    1. Function declaration:
        The async keyword is used to define an asynchronous function,indicating that the function will 
        contain asynchronous operations,such as the fetch API.
*/
   const fullName =  $('#user').val();
   const email =  $('#mail').val();
   const mobile =  $('#mobile').val();
   const password =  $('#pass').val();
   const repassword =  $('#re-pass').val();
/*
    2.Variable Assignments:
        Variables are declared and assigned values retrieved from HTML elements using jQuery.The values are 
        obtained from input fields with the IDs(#)'user', 'mail', 'mobile', 'pass', and 're-pass'.
*/
    const url = 'http://localhost:8080/register';
    const result = await fetch(url, {
        method:'POST', 
        body:JSON.stringify({
        name: fullName,
        email: email,
        mobile: mobile,
        password: password,
        repassword: repassword
    }), 
    headers:{
        "Content-Type": "application/json"
    }});
/*
    3.POST Request with Fetch API:
        The fetch function is used to make a POST request to a specified URL (http://localhost:8080/register).
        The request body contains data in JSON format,including the user's full name, email, mobile number,
        password,and repeated password.
*/

    const finalData = result.json();
/*
    4.Handling the Response:
        The result variable holds the response from the server. The json() method is then called on the
        result to parse the response body as JSON. Note that result.json() returns a promise.
 */    
    console.log(finalData)
/*
    5.Logging the Result:
        The parsed JSON data is logged to the console.    
*/
}


