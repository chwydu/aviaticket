const sql = require('../dbconfig')
const Airport = function(airport) {
    this.airport = airport.airport
    this.index_airport = airport.index_airport
    this.landingSite = airport.landingSite
    this.arrivalLocations = airport.arrivalLocations
    this.city =airport.city
  };
  Airport.create = (newairport, result) => {
    sql.query("INSERT INTO airport SET ?", newairport, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created airport: ", { id: res.insertId, ...newairport })
      result(null, { id: res.insertId, ...newairport })
    });
  };
  
  Airport.findById = (airportId, result) => {
    sql.query(`SELECT * FROM airport WHERE id = ${airportId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found airport: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "not_found" }, null);
    });
  };
  
  Airport.getAll = result => {
    sql.query("SELECT * FROM airport", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("airport: ", res);
      result(null, res);
    });
  };
  
  Airport.updateById = (id, airport, result) => {
    sql.query(
      "UPDATE airport SET airport  = ?, landingSite = ?, arrivalLocations = ?, city = ?,  WHERE id = ?",
      [airport.airport, airport.landingSite, airport.arrivalLocations, airport.city, id],
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
  
        console.log("updated airport: ", { id: id, ...airport });
        result(null, { id: id, ...airport });
      }
    );
  };
  
  Airport.remove = (id, result) => {
    sql.query("DELETE FROM airport WHERE id = ?", id, (err, res) => {
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
  
      console.log("deleted airport with id: ", id);
      result(null, res);
    });
  };
  
  Airport.removeAll = result => {
    sql.query("DELETE FROM airport", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log(`deleted ${res.affectedRows} airport`);
      result(null, res);
    });
  };
  
  module.exports = Airport;