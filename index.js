// Ajouter ici le ou les require() pour importer les modules dont vous aurez besoin.
const http = require('http');
// Hit parade, classé du premier au dernier.
const hitParade = [
    {
        position: 1,
        artist: `Jain`,
        title: `Come`
    },
    {
        position: 2,
        artist: `Matt Simons`,
        title: `Catch & Realease`
    },
    {
        position: 3,
        artist: `Twety One Pilots`,
        title: `Stressed Out`,
    },
    {
        position: 4,
        artist: `Justin Bieber`,
        title: `Love Yourself`,
    },
    {
        position: 5,
        artist: `Kids United`,
        title: `On écrit sur les murs`,
    },
    {
        position: 6,
        artist: `Rihanna`,
        title: `Work`,
    },
    {
        position: 7,
        artist: `Julian Perretta`,
        title: `Miracle`,
    },
    {
        position: 8,
        artist: `Yall`,
        title: `Hundred Miles`,
    },
    {
        position: 9,
        artist: `Kendji Girac`,
        title: `No Me Mirès Màs`,
    },
    {
        position: 10,
        artist: `Feder`,
        title: `Blind (feat. Emmi)`,
    },
];

// Votre code va ici
let count = 0

const server = http.createServer((req, res) => {
    res.write(`
        <head>
            <style>
                body{
                    text-align: center;
                };
                h1{
                    font-size: 4em;
                    color: blue;  
                }                    
                p{
                    margin: 0;
                    font-size: 1em;
                } 
            </style>
        </head>
    `)

    
    switch(req.url) {
    case '/':
        res.write(`Je m'appelle Charlu, je m'appelle Lili, vous êtes chez O'clock`);
        count++;
        break;
    case '/classement':
        for (let i = 0; i < hitParade.length; i++) {
            res.write(`<p>${hitParade[i].position} - ${hitParade[i].artist} - ${hitParade[i].title}</p>`)              
          }        
        break;
    case '/stats':
        res.write(count);
        break;
    default: 
        res.statusCode = 404;
        res.write(`404, page non trouvée`)       
        break;
}
res.end();
})
server.listen(3000);