# Weather App

### Start

### Init

#### Questions
-How do we fetch location data from an API?
// need an API key
// API key = a9a57e468a763f78b091447412c6c924


#### User Perspective
- How will it be viewed?
- User goes to page
- user enters zip code and clicks enter
- displays data from API
- how to display the data?
- if issue, user sees error message
- Error message displayed to the right

##### Info to be Shown
* City
* Temperature in various forms (K, F, C)
* Conditions
* Other Info with Image related to weather
* Display after valid zip code was shown
* If zipcode bad, display error message
    - if else statement

- UI, needs header and body
- Waiting on User Input
- Receive user input
- desk top, mobile phone set up?
### End

##Functional

  - start with init();
    * declare variabes
    * setState
  - displayTemp (num) {
    // adjust to various types
}
  - SEND API key and user input to API
  - fetchData () {
  axios get?
  //user error?
  // what do I want it to do?
  // if error, display it
}


##Object Oriented

  currentWeatherData;
  userInput object
  UserInput = {
    currentValue: "40216";
    resultData : { };
    requestTime;
 }
 
 
 checkUserInput (e) {
    input length is 5 numbers
    make sure text field provides input
    // if error, than what? show error display
}
 render {
    shows table of imported API data
 }
 
 
 
 
 
 
 
 
