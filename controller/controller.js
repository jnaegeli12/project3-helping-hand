const db = require("../db");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Results
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  selectAllFood: function(req, res) {
    db.Results
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  selectAllShelter: function(req, res) {
    return db.Results
  },
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
