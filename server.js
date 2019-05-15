/*
Importer les composants serveur
*/
require('dotenv').config();
const express = require('express');
const path = require('path');
//

/*
Configuration du serveur
*/
//Définir les variables du serveur
const server = express();
const port = process.env.PORT;

//Définition du dossier static du client
server.set('views', __dirname + '/www');
//

/*
Lancer le serveur
*/
server.listen(port, () => console.log(`server listening on port ${port}`))
//