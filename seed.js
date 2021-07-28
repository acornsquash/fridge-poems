const { green, red } = require('chalk')
const db = require('./server/db')
const Content = require('./server/models/content')

const words = [
    {
        word: 'rainy'
    },
    {
        word: 'sunshine'
    },
    {
        word: 'weary'
    },
    {
        word: 'timeline'
    },
    {
        word: 'escape'
    },
    {
        word: 'sustains'
    },
    {
        word: 'droops'
    },
    {
        word: 'loose'
    },
    {
        word: 'animals'
    },
    {
        word: 'chatter'
    },
    {
        word: 'scissors'
    },
    {
        word: 'daydream'
    },
    {
        word: 'incompetant'
    }
]

const seed = async () => {
    try {
      await db.sync({ force: true });
      await Content.bulkCreate(words)
      console.log(green('Seeded content!'))
  
  
    } catch (err) {
      console.log(red(err));
    }
  };

  module.exports = seed
  
  if (require.main === module) {
    seed()
      .then(() => {
        console.log(green('Seeding success!'));
        db.close();
      })
      .catch((err) => {
        console.error(red('Oh shit! Something went wrong!'));
        console.error(err);
        db.close();
      });
  }
  