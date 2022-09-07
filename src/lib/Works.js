const works = [
    {
        title: 'TextEditor',
        type: 'Works',
        description: 'A progressive web application using IndexedDB.',
        narrative: 'A simple text editor that is downloadable and readily available offline.',
        cover: '/assets/images/textEditor.png',
        images: [],
        website: 'https://tony-pwa-jate.herokuapp.com/',
        github: 'https://github.com/Tonyavall/15-PWA-TextEditor',
        stack: 'Nodejs, Webpack, Babel, Workbox, IndexedDB',
        platform: 'Web',
        published: '2022'
    },
    {
        title: 'Social Network API',
        type: 'Works',
        description: 'A NoSql backend for a social network app using Express and Node.',
        narrative: 'A social network API for storing user data and interactions. These interactions include being able to add users as friends, being able to post their thoughts, and being able to reply to those thoughts.',
        cover: '/assets/images/socialNetwork.png',
        images: [],
        website: '',
        github: 'https://github.com/Tonyavall/14-SocialNetworkAPI',
        stack: 'NoSql (MongoDB, Mongoose), Expressjs, Nodejs',
        platform: 'NoSql',
        published: '2022'
    },
    {
        title: 'LNET',
        type: 'Works',
        description: 'Got something to say? Blog about it using LNET.',
        narrative: 'A CMS-style blog web app using Sequelize, Express, Handlebars, and Tailwind. User authentication is handled through express middleware and Bcrypt, with some business logic authentication as well as frontend error handling. Database language used is Mysql2 for Sequelize and its respective models can be found in /models.',
        cover: '/assets/images/lnet.png',
        images: [],
        website: 'https://lnet.herokuapp.com/',
        github: 'https://github.com/Tonyavall/12-LNET',
        stack: 'Nodejs, Sequelize (Mysql2), Expressjs, Handlebars, Tailwind, Bcrypt, Heroku',
        platform: 'Web',
        published: '2022'
    },
    {
        title: 'Ecommerce API',
        type: 'Works',
        description: 'Store data with sequelize!',
        narrative: 'Ecommerce related data such as items and their respective price, stock, name, category, and tag are stored in the backend using sequelize- an object relational mapper (ORM) for mysql2.',
        cover: '/assets/images/eCommBackend.png',
        images: [],
        website: '',
        github: 'https://github.com/Tonyavall/11-ECommerce-API',
        stack: 'JavaScript, Nodejs, Mysql2 (Sequelize), Expressjs',
        platform: 'Mysql',
        published: '2022'
    },
    {
        title: 'Employee Tracker',
        type: 'Works',
        description: 'Track your employees, roles, and departments with mysql2!',
        narrative: 'A mysql2 based CLI employee tracker made with NodeJs. Upon initialization, the user is prompted with a menu of questions pertaining to a mysql2 database- questions such as listing, adding, and deleting roles, etc. Query methods such as SELECT, DELETE, INSERT, and JOINS were used to achieve its functionaltiy as well as the most recent ES6 JavaScript syntax for asynchronous code- async/await, try/catch.',
        cover: '/assets/images/employeeTracker.png',
        images: [],
        website: '',
        github: 'https://github.com/Tonyavall/10-EmployeeTracker',
        stack: 'JavaScript, Nodejs, Mysql2, Inquirer',
        platform: 'CLI',
        published: '2022'
    },
    {
        title: 'Express Note Taker',
        type: 'Works',
        description: "Take notes with express! A relatively simple 'database' notetaking app.",
        narrative: 'A notetaking app that uses a pseudo database file (json) that stores user notes. Based on the express framework, api and html routes were connected through a series of get, post, and delete methods. ',
        cover: '/assets/images/expressNoteTaker.png',
        images: [],
        website: 'https://hw-9-express-notetaker.herokuapp.com/',
        github: 'https://github.com/Tonyavall/9-Express-Note-Taker',
        stack: 'Nodejs, JavaScript, Expressjs, Heroku',
        platform: 'Web',
        published: '2022'
    },
    {
        title: 'Team Profile Generator',
        type: 'Works',
        description: 'A simple web app that gathers user input and generates a team members page.',
        narrative: 'An Html5 generator based on user input gathered from npm Inquirer questions. Class objects were created and their functionality were tested through a series of Jest tests.',
        cover: '/assets/images/profileGen.png',
        images: [],
        website: '',
        github: 'https://github.com/Tonyavall/8-Team-Profile-Generator',
        stack: 'JavaScript, Nodejs, Inquirer, Jest',
        platform: 'CLI',
        published: '2022'
    },
    {
        title: 'ReadMe Generator',
        type: 'Works',
        description: 'A simple Markdown File Generator for Node.js using Inquirer.',
        narrative: 'Upon installation and init, the user is prompted with several questions pertaining to their markdown file data. This includes, file name (as well as file path), title of their project, description, a preview, tech stack used, installation information, license used, etc.',
        cover: '/assets/images/readMeGen.gif',
        images: [],
        website: '',
        github: 'https://github.com/Tonyavall/7-ReadMe-Generator',
        stack: 'JavaScript, Nodejs, Inquirer',
        platform: 'CLI',
        published: '2022'
    },
    {
        title: 'Weather Dashboard',
        type: 'Works',
        description: 'Track the weather from anywhere in the world.',
        narrative: 'Geocoding and Weather APIs work in tandem, respectively, to: a. Grab user city string and fetch API data, returning latitudes(lat) and longitudes(lon) of the city b. Returned lats and lons are then used to fetch WeatherAPI data.',
        cover: '/assets/images/weatherApp.jpg',
        images: [],
        website: 'https://tonyavall.github.io/6-Weather-Dashboard/',
        github: 'https://github.com/Tonyavall/6-Weather-Dashboard',
        stack: 'JavaScript, CSS, HTML',
        platform: 'Web',
        published: '2022'
    },
    {
        title: 'Workday Scheduler',
        type: 'Works',
        description: 'Just another workday scheduler.',
        narrative: 'Narrative goes here.',
        cover: '/assets/images/dayPlanner.png',
        images: [],
        website: 'https://tonyavall.github.io/5-Workday-Schedule/',
        github: 'https://github.com/Tonyavall/5-Workday-Schedule',
        stack: 'JavaScript (Jquery, Momentjs), CSS, HTML',
        platform: 'Web',
        published: '2022'
    },
    {
        title: 'Coding Quiz App',
        type: 'Works',
        description: 'A simple coding quiz web app.',
        narrative: 'Narrative goes here.',
        cover: '/assets/images/codeQuiz.png',
        images: [],
        website: 'https://tonyavall.github.io/4-Coding-Quiz-App/',
        github: 'https://github.com/Tonyavall/4-Coding-Quiz-App',
        stack: 'JavaScript, HTML, CSS',
        platform: 'Web',
        published: '2022'
    },
    {
        title: 'Password Generator',
        type: 'Works',
        description: 'A simple password generator app.',
        narrative: 'Narrative goes here.',
        cover: '/assets/images/passGen.png',
        images: [],
        website: 'https://tonyavall.github.io/3-Password-Generator/',
        github: 'https://github.com/Tonyavall/3-Password-Generator',
        stack: 'JavaScript, HTML, CSS',
        platform: 'Web',
        published: '2022'
    },
]

export default works;