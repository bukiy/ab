module.exports = {
  siteTitle: 'Abubeker Mohammed | Software Engineering Student',
  siteDescription:
    'Abubeker Mohammed is a software engineering Student in China,I love learning. I challenge myself every day to learn something new about machine learning, software engineering, or various facts about the universe.',
  siteKeywords:
    'Abubeker Mohammed Amin, Abubeker, Abubeker Mohammed, machine learning self-taught engineer, software engineer, Machine Learning engineer, Deep Learning,Neural Network Architectures, Hubei University of Technology',
  siteUrl: 'https://bekry.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Abubeker Mohammed',
  location: 'Wuhan, CN',
  email: 'abukie969@gmail.com',
  github: 'https://github.com/bukiy',
  twitterHandle: '@bekry_100',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/bukiy',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/abubeker-mohammed-amin-26010a184/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/bekry_100',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/bekry_100',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#172a45',
    Slate: '#ccd6f6',
    darkNavy: '#1f1901',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
