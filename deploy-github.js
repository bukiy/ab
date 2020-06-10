const ghpages = require('gh-pages');

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/bukiy/bukiy.github.io',
  },
  () => {
    console.log('Deploy Complete!');
  },
);
