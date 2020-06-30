const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/prueba-sapper',
    {
        branch: 'master',
        repo: 'https://github.com/dabatistaa/prueba-sapper.git',
        user: {
            name: 'dabatistaa',
            email: 'dabatistaa@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)