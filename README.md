# Weather App

A simple and responsive weather application that fetches real-time weather data for any city using the OpenWeatherMap API. This project is built with **HTML, CSS, and JavaScript**.

## Features
- **Real-Time Weather Data**: Get current weather information such as temperature, humidity, and wind speed.
- **City Search**: Enter any city name to view its weather details.
- **Dynamic Weather Icons**: Icons change based on the current weather condition (e.g., clear, rain, clouds, etc.).
- **Error Handling**: Displays an error message if the city name is invalid or not found.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.

## How to Use

### Clone the Repository:
```bash
git clone https://github.com/Surafel-Uzumaki/weather-app.git
cd weather-app
```

### Get an API Key:
1. Sign up at [OpenWeatherMap](https://openweathermap.org/) to get your free API key.
2. Replace the `apiKey` variable in `index.js` with your own API key:

```javascript
const apiKey = "your-api-key-here";
```

### Run the App:
1. Open the `index.html` file in your browser.
2. Enter a city name in the search bar and click the search button to view the weather details.

## File Structure
```
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
```

## Technologies Used
- **HTML**: For structuring the app.
- **CSS**: For styling and responsive design.
- **JavaScript**: For fetching data from the API and dynamically updating the DOM.
- **OpenWeatherMap API**: For real-time weather data.

## Contributing
Contributions are welcome! If you'd like to improve this project, follow these steps:

1. **Fork the repository**.
2. **Create a new branch**:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. **Commit your changes**:
   ```bash
   git commit -m 'Add some feature'
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature/YourFeatureName
   ```
5. **Open a pull request**.

## License
This project is open-source and available under the [MIT License](LICENSE).
