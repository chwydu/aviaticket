const Airport = require("../models/airport");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      
      const airport = new Airport({
        airport: req.body.airport,
        index_airport:req.body.index_airport,
        landingSite: req.body.landingSite,
        arrivalLocations: req.body.arrivalLocations,
        city:req.body.city

        
      });
    
      Airport.create(airport, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating ."
          });
        else res.send(data);
      });
    };
  



exports.findAll = (req, res) => {
    Airport.getAll((err, data) => {
          if (err)
            res.status(500).send({
              message:
                err.message || "Some error"
            });
          else res.send(data);
        });
      };
  


exports.findOne = (req, res) => {
    Airport.findById(req.params.airportId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.airportId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Customer with id " + req.params.airportId
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
    
      Airport.updateById(
        req.params.airportId,
        new ticket(req.body),
        (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Customer with id ${req.params.airportId}.`
              });
            } else {
              res.status(500).send({
                message: "Error updating Customer with id " + req.params.airportId
              });
            }
          } else res.send(data);
        }
      );
  
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
    Airport.remove(req.params.airportId, (err, _data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.airportId}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Customer with id " + req.params.ticketId
            });
          }
        } else res.send({ message: `Customer was deleted successfully!` });
      });
  
};

// Delete all Customers from the database.
exports.deleteAll = (_req, res) => {
    Airport.removeAll((err, _data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all customers."
          });
        else res.send({ message: `All Customers were deleted successfully!` });
      });
  
};