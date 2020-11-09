const Polsovatel = require("../models/polsovatel");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      
      const polsovatel = new Polsovatel({
        fullName: req.body.fullName,
        dateOfBirth: req.body.dateOfBirth,
        mail: req.body.mail,
        telephone:req.body.telephone,
        documents:req.body.documents,
        vsa:req.body.vsa


    

        
      });
    
      Polsovatel.create(polsovatel, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating ."
          });
        else res.send(data);
      });
    };
  



exports.findAll = (req, res) => {
    Polsovatel.getAll((err, data) => {
          if (err)
            res.status(500).send({
              message:
                err.message || "Some error"
            });
          else res.send(data);
        });
      };
  


exports.findOne = (req, res) => {
    Polsovatel.findById(req.params.clientId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.clientId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Customer with id " + req.params.clientId
            });
          }
        } else res.send(data);
      });
  
};

// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      Polsovatel.updateById(
        req.params.clientId,
        new ticket(req.body),
        (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Customer with id ${req.params.clientId}.`
              });
            } else {
              res.status(500).send({
                message: "Error updating Customer with id " + req.params.clientId
              });
            }
          } else res.send(data);
        }
      );
  
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
    Polsovatel.remove(req.params.clientId, (err, _data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.clientId}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Customer with id " + req.params.clientId
            });
          }
        } else res.send({ message: `Customer was deleted successfully!` });
      });
  
};

// Delete all Customers from the database.
exports.deleteAll = (_req, res) => {
    Polsovatel.removeAll((err, _data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all customers."
          });
        else res.send({ message: `All Customers were deleted successfully!` });
      });
  
};