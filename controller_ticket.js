const Ticket = require("../models/model_ticket");
// Create and Save a new Customer
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      // Create a Customer
      const ticket = new Ticket({
        fullname:req.body.fullname,
        data_of_departure: req.body.data_of_departure,
        data_of_arrival: req.body.data_of_arrival,
        city_of_departure: req.body.city_of_departure,
        city_of_arrival:req.body.city_of_arrival,
        boocking_code:req.body.boocking_code,
        cost:req.body.cost,
        place_number:req.body.place_number,
        luggage:req.body.luggage,
        place_class:req.body.place_class

      });
    
      // Save Customer in the database
      Ticket.create(ticket, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the ticket."
          });
        else res.send(data);
      });
    };
  


// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
        Ticket.getAll((err, data) => {
          if (err)
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving ticket."
            });
          else res.send(data);
        });
      };
  

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
    Ticket.findById(req.params.ticketId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found ticket with id ${req.params.ticketId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving ticket with id " + req.params.ticketId
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
    
      Ticket.updateById(
        req.params.ticketId,
        new ticket(req.body),
        (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found ticket with id ${req.params.ticketId}.`
              });
            } else {
              res.status(500).send({
                message: "Error updating ticket with id " + req.params.ticketId
              });
            }
          } else res.send(data);
        }
      );
  
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
    Ticket.remove(req.params.ticketId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found ticket with id ${req.params.ticketId}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete ticket with id " + req.params.ticketId
            });
          }
        } else res.send({ message: `ticket was deleted successfully!` });
      });
  
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
    Ticket.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all customers."
          });
        else res.send({ message: `All Customers were deleted successfully!` });
      });
  
};