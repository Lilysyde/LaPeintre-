const connection = require('./conf');
const express = require('express')
const app = express();
const port = 2400;
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors()); // Authorisation d'accès au serveur


// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

//Contact

// GET - Récupération de l'ensemble des données de ta table
app.get('/contact', (req, res) => {

    // connection à la base de données, et sélection des employés
    connection.query('SELECT * from contact', (err, results) => {
  
      if (err) {
  console.log(err);
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        res.status(500).send('Erreur lors de la récupération des contacts');
      } else {
  
        // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
        res.json(results);
      }
    });
  });

  app.post('/contact', (req, res) => {

    // récupération des données envoyées
    const formData = req.body;
  
    // connexion à la base de données, et insertion de l'employé
    connection.query('INSERT INTO contact SET ?', formData, (err, results) => {
  
      if (err) {
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        console.log(err);
        res.status(500).send("Erreur lors de la sauvegarde d un contact");
      } else {
        // Si tout s'est bien passé, on envoie un statut "ok".
        res.sendStatus(200);
      }
    });
  });

  // DELETE - Suppression d'une entité
// écoute de l'url "/api/employees"
app.delete('/contact/:id', (req, res) => {
    // récupération des données envoyées
    const id = req.params.id;
    // connexion à la base de données, et suppression de l'employé
    connection.query('DELETE FROM contact WHERE id = ?', id, err => {
      if (err) {
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        console.log(err);
        res.status(500).send("Erreur lors de la suppression d'un contact");}
    });
  });

  // Fin Contact

// temoignage 


// GET - Récupération de l'ensemble des données de ta table
app.get('/temoignage', (req, res) => {

  // connection à la base de données, et sélection des employés
  connection.query('SELECT * from temoignage', (err, results) => {

    if (err) {
console.log(err);
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      res.status(500).send('Erreur lors de la récupération des temoignages');
    } else {

      // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
      res.json(results);
    }
  });
});

app.post('/temoignage', (req, res) => {

  // récupération des données envoyées
  const formData = req.body;

  // connexion à la base de données, et insertion de l'employé
  connection.query('INSERT INTO temoignage SET ?', formData, (err, results) => {

    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      console.log(err);
      res.status(500).send("Erreur lors de la sauvegarde d un temoignage");
    } else {
      // Si tout s'est bien passé, on envoie un statut "ok".
      res.sendStatus(200);
    }
  });
});

// fin temoignage

app.listen(port, (err) => {
    if (err) {
      throw new Error('Something bad happened...');
    }
  
    console.log(`Server is listening on ${port}`);
  });
  