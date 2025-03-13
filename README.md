# weather-app
A simple and responsive weather application that fetches real-time weather data for any city using the OpenWeatherMap API. This project is built with HTML, CSS, and JavaScript.

Features
Real-Time Weather Data: Get current weather information such as temperature, humidity, and wind speed.

City Search: Enter any city name to view its weather details.

Dynamic Weather Icons: Icons change based on the current weather condition (e.g., clear, rain, clouds, etc.).

Error Handling: Displays an error message if the city name is invalid or not found.

Responsive Design: Works seamlessly on both desktop and mobile devices.

How to Use
Clone the Repository:

bash
Copy
git clone https://github.com/Surafel-Uzumaki/weather-app.git
cd weather-app
Get an API Key:

Sign up at OpenWeatherMap to get your free API key.

Replace the apiKey variable in index.js with your own API key:

javascript
Copy
const apiKey = "your-api-key-here";
Run the App:

Open the index.html file in your browser.

Enter a city name in the search bar and click the search button to view the weather details.

File Structure
Copy
weather-app/
├── index.html          # Main HTML file
├── style.css           # Styles for the app
├── index.js            # JavaScript logic for fetching and displaying weather data
├── images/             # Folder containing weather icons and other assets
│   ├── clear.png
│   ├── clouds.png
│   ├── drizzle.png
│   ├── humidity.png
│   ├── mist.png
│   ├── rain.png
│   ├── search.png
│   └── wind.png
└── README.md           # This file
Technologies Used
HTML: For structuring the app.

CSS: For styling and responsive design.

JavaScript: For fetching data from the API and dynamically updating the DOM.

OpenWeatherMap API: For real-time weather data.

Contributing
Contributions are welcome! If you'd like to improve this project, follow these steps:

Fork the repository.

Create a new branch (git checkout -b feature/YourFeatureName).

Commit your changes (git commit -m 'Add some feature').

Push to the branch (git push origin feature/YourFeatureName).

Open a pull request.
