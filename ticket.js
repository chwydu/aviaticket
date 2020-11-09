const sql = require('../dbconfig')
const Ticket = function(ticket) {
  this.fullname = ticket.fullname
    this.data_of_departure = ticket.data_of_departure
    this.data_of_arrival = ticket.data_of_arrival
    this.city_of_departure = ticket.city_of_departure
    this.city_of_arrival =ticket.city_of_arrival 
    this.boocking_code =ticket.boocking_code
    this.cost =ticket.cost
    this.place_number = ticket.place_number
    this.luggage =ticket.luggage
    this.place_class = ticket.place_class
  };
  Ticket.create = (newticket, result) => {
    sql.query("INSERT INTO ticket SET ?", newticket, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created ticket: ", { id: res.insertId, ...newticket })
      result(null, { id: res.insertId, ...newticket })
    });
  };
  
  Ticket.findById = (ticketId, result) => {
    sql.query(`SELECT * FROM ticket WHERE id = ${ticketId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found ticket: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "not_found" }, null);
    });
  };
  
  Ticket.getAll = result => {
    sql.query("SELECT * FROM ticket", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("ticket: ", res);
      result(null, res);
    });
  };
  
  Ticket.updateById = (id, ticket, result) => {
    sql.query(
      "UPDATE ticket SET fullname  = ?, data_of_arrival = ?, boocking_code = ?, cost = ?, place_number = ?, luggage = ?, place_class = ?, data_of_departure = ?, city_of_deprture = ?,city_od_arrival = ? WHERE id = ?",
      [ticket.fullname, ticket.boocking_code, ticket.cost, ticket.place_number, ticket.luggage, ticket.city_of_departure, ticket.city_of_arrival, ticket.data_of_arrival, ticket.data_of_departure, ticket.place_class, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found Customer with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated ticket: ", { id: id, ...ticket });
        result(null, { id: id, ...ticket });
      }
    );
  };
  
  Ticket.remove = (id, result) => {
    sql.query("DELETE FROM ticket WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted ticket with id: ", id);
      result(null, res);
    });
  };
  
  Ticket.removeAll = result => {
    sql.query("DELETE FROM ticket", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log(`deleted ${res.affectedRows} ticket`);
      result(null, res);
    });
  };
  
  module.exports = Ticket;