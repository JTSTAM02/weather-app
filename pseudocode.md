# Weather App

### Start
    * Create Input HTML field
    * Button to click to get zipcode weather data
    * addEventListener to the button
        - On click, it will get the entered zipcode and call a function to get weather data
**       STRETCH GOAL-Create these elements in JavaScript using .createElement("")
**

### Init (AKA Render/displayWeatherData function)

#### Questions for Function
-How do we fetch location data from an API?
   - Use axios
   -  get code from example (https://axios-http.com/docs/example)
// need an API key
// API key = a9a57e468a763f78b091447412c6c924
- What variables do I need to create?
      * displayWeatherData
      * apiKey
      * form, label, button, title
      * 
- What functions do I need?
   - Major functions nested into createForm (stretch goal)     
      * getWeatherData (to fetch weather data from API)
      * displayWeatherData (renders data onto file)
      * displayError for error to the right of the chart
      * functions for each temperature (check silly story generator)


#### User Perspective
- How will it be viewed?
- User goes to page
- user enters zip code and clicks enter
- displays data from API
**- how to display the data?
**- if issue, user sees error message
- Error message displayed to the right

##### Info to be Shown in displayWeatherData Function
* City
* Temperature in various forms (K, F, C)
* Conditions
* Other Info with Image related to weather (already available in API if fetched correctly)
* Display after valid zip code was shown
- desk top, mobile phone set up
      - use bootstrap layout
### End

##Functional

  - start with createForm()
    * declare variabes
      * form, label, title, button    
  - getWeatherData() {
      axios code
      get {
      }
      catch {
      }
};

   - displayError() {
      error = document.createElement("div")
      error.innerHTML = `<p> {message}</p>;
     }


##Object Oriented


 
 
 
 
 
 
 
 
