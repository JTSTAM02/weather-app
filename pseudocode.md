# Weather App

### Start
    * Create Input HTML field
    * Button to click to get zipcode weather data
    * addEventListener to the button
        - On click, it will get the entered zipcode and call a function to get weather data
**       STRETCH GOAL-Create these elements in JavaScript using .createElement("")
**

### Init (AKA Render)

#### Questions for Function
-How do we fetch location data from an API?
// need an API key
// API key = a9a57e468a763f78b091447412c6c924
- What variables do I need to create?
      * displayWeatherData
      * setState
- What functions do I need?
      * render (to display weather data in table format)
      * checkUserInput (to check if zipcode entered or not-if not, display error message)
      * createForm (stretch goal)
      * function for each temperature (check silly story generator)
      * function for error message


#### User Perspective
- How will it be viewed?
- User goes to page
- user enters zip code and clicks enter
- displays data from API
**- how to display the data?
**- if issue, user sees error message
- Error message displayed to the right

##### Info to be Shown in Render Function
* City
* Temperature in various forms (K, F, C)
* Conditions
* Other Info with Image related to weather
* Display after valid zip code was shown
- desk top, mobile phone set up?
### End

##Functional

  - start with createForm()
    * declare variabes
  - getWeatherData() {
  - SEND API key and user input to API
  - 
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
 
 
 
 
 
 
 
 
