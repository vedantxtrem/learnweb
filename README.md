# LMS FronEnd

## Setup Instructions

1. Clone the Project
```
    git clone https://github.com/vedantxtrem/LMS-F.git 
```
2. Move into the directory
```
    cd 'LMS FrontEnd'
```
3. Install dependecies 
```
    npm i 
```
4. Run the server
```
    npm run dev
```

## Setup Instructions for tailwindCss
1. Install tailwindCss

```
    npm install -D tailwindcss postcss autoprefixer
```
2. Create tailwind config file
```
    npx tailwindcss init
```
3. Add file extensions to tailwind config file in the contents property
```
    "./src/**/*.{html,js,jsx,ts,tsx}", "./index.html",
```
4. Add the tailwind directives at the top of the index.css file
```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```
<!-- 5. Add the following details in the plugin property of tainwind config
```
    [require("daisyui"), require("@tailwindcss/line-clamp")]
``` -->
## Adding plugins and dependencies 

```
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axi
os react-hot-toast @tailwindcss/line-clamp
```
