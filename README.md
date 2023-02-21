# react-weather-app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Application Information

### Node Versioning

node:   v19.6.1
npm:    v9.4.0

### Api Details

Weatherbit.io

Requires API Key that can be set in local .env file as `REACT_APP_WEATHER_API_KEY` when testing locally.

Current Weather API: https://www.weatherbit.io/api/weather-current

Forcast API: https://www.weatherbit.io/api/weather-forecast-16-day

### Folder Structure

.
├── build                   # prod build output files, only appears after running build locally
├── node_modules            
├── public                  # files that are public use and not to be bundled in files during builds
├── src                     # active development folder
│   ├── css                 # SCSS files for styling
│   │   ├── components      # component specific style sheets
│   │   ├── constants       # Contains SASS variables for use across application
│   │   ├── base.scss       # Global base styles for use across app
│   │   └── index.scss      # SASS Imports file
│   ├── js                  # JS files for react components and more
│   │   ├── actions         # action files handle data passing between components and api
│   │   ├── api             # files that contain api call logic
│   │   ├── components      # react components
│   │   ├── constants       # Any constant values: labels, units, dates, etc.
│   │   └── util            # Utility functions that can be used anywhere
│   ├── resources           # Misc images, files, static assets, etc.
│   │   ├── fonts           # font ttf files
│   │   ├── icons           # icon pngs provided by Weatherbit.io for weather conditions
│   │   └── ...         
│   └── index.js            # Initial js file, creates react app root
├── .env                    # not part of github tracking but needed for api key
├── .gitignore
├── package-lock.json 
├── package.json
├── README
└── ...

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
