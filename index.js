// Ajouter ici le ou les require() pour importer les modules dont vous aurez besoin.
const { link } = require('fs');
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
// Je crée un server avec la méthode creatServer de http avec une fonction de callback (req, res)
const server = http.createServer((req, res) => {
    // Pour réglé le problème d'accent en affichage sur le navigateur on rajoute un type mim
    res.setHeader('content-type', 'text/html;charset=utf-8')
    // BONUS je crée des balise html dans une variable pour donner du style et un body sur l'affichage de mon navigateur
   let html = `
    <head> 
        <style>
            body{
                text-align: center;
            };
            h1{
                font-size: 4em;                  
            }                    
            p{
                margin: 0;
                font-size: 1em;
                color: blue;
            } 
        </style>
    </head>
    <body>
`
// Je fait un switch pour les différantes réponses que va me soumettre l'utilisateur
    switch(req.url) {
    case '/':
        //si la page deandée est :3000/ alors je lis ma réponse et ma variable count prend +1 et BONUS j'ajoute un <p></p> dans ma variable html avec += avec mon txt a l'interieur
        html+= `<p>Je m'appelle Charlu, je m'appelle Lili, vous êtes chez O'clock</p>`
        count++;
        // pour sortir d'un case on met tjrs un break; !
        break;
    case '/classement':    
        for (let i = 0; i < hitParade.length; i++) {
            html+=`<li>${hitParade[i].position} - ${hitParade[i].artist} - ${hitParade[i].title}</li>`              
          }
          // pour sortir d'un case on met tjrs un break; !        
        break;
        // J' affiche mon count si la page :3000/stats est demandée
    case '/stats':
        html+=`<p>cette chanson a été vue ${count} fois !</p>`;
        // pour sortir d'un case on met tjrs un break; !
        break;
        // si aucune reponse attendu est donné, alors on affiche erreur 404 avec le code dans le network
    default: 
        res.statusCode = 404;
        html+=`<p>404, page non trouvée</p>`;
        // pour sortir d'un case on met tjrs un break; !      
        break;
}
// BONUS je ferme ma balise body après avoir incorporé tout la ou j'en ai besoin dans mon switch
html+=`</body>`;
// J'appelle  mon html après le swith sinon rien ne s'affiche
res.write(html);
res.end();
})
// J'écoute et je choisi un port pour mon server
server.listen(3000);