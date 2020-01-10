const connection = require('../conf');

// POST a new mission
const addMission = (req, res) => {

  const missionData = req.body

  connection.query('INSERT INTO mission SET ?', missionData, (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de l'ajout de la mission")
    } else {
      res.json(results).send("Mission ajouté")
    }
  });
}

// MODIFY a mission
const updateMission = (req, res) => {

  const missionId = req.params.id;
  const missionData = req.body;

  connection.query('UPDATE mission SET ? WHERE id = ?', [missionData, missionId], (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la modification de la mission");
    } else {
      res.status(200).send('Mission modifié');
    }
  });
}

// DELETE a mission
const deleteMission = (req, res) => {
  
  const missionId = req.params.id;

  connection.query('DELETE FROM mission WHERE id = ?', missionId, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la suppression de la mission')
    } else {
      res.status(200).send("Mission supprimé")
    }
  });
}


module.exports = {
  addMission,
  updateMission,
  deleteMission
}