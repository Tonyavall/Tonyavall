// do not use non alphanumeric characters. spaces are ok
const collaborations = [
  {
    title: 'OldEgg',
    type: 'Collaborations',
    description: 'Shop electronics on OldEgg!',
    narrative: 'An electronics ecommerce website that features electronic products and user authentication. Users can search and buy items from the store using carts, and are also able to add them to their wishlist.',
    cover: '/assets/images/oldEgg.png',
    images: [],
    website: 'https://oldegg.herokuapp.com/',
    github: 'https://github.com/Tonyavall/OldEgg',
    stack: 'Nodejs, Expressjs, Handlebars, Sequelize (MySql2), AWS S3, ESLint, Heroku',
    platform: 'Web',
    published: '2022',
    rank: 2,
  },
  {
    title: "What's Streamin'",
    type: 'Collaborations',
    description: "Don't know what show to watch? See What's Streamin'",
    narrative: 'A simple web app that randomly generates a movie or show to watch based on user input criteria',
    cover: '/assets/images/streamin.jpg',
    images: [],
    website: 'https://swagnarok630.github.io/Stream_Availability/',
    github: 'https://github.com/Tonyavall/Stream_Availability',
    stack: 'HTML, CSS (Bootstrap, CSS.GG), JavaScript',
    platform: 'Web',
    published: '2022',
    rank: 3
  },
]

export default collaborations;