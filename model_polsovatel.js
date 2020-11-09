const sql = require('../dbconfig')
const Polsovatel = function(polsovatel) {
    this.fullName = polsovatel.fullName
    this.dateOfBirth = polsovatel.dateOfBirth
    this.mail = polsovatel.mail
    this.telephone = polsovatel.telephone
    this.documents = polsovatel.documents
    this.vsa = polsovatel.vsa
  };
  Polsovatel.create = (newpolsovatel, result) => {
    sql.query("INSERT INTO polsovatel SET ?", newpolsovatel, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created polsovatel: ", { id: res.insertId, ...newpolsovatel })
      result(null, { id: res.insertId, ...newpolsovatel })
    });
  };
  
  Polsovatel.findById = (clientId, result) => {
    sql.query(`SELECT * FROM polsovatel WHERE id = ${clientId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found polsovatel: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "not_found" }, null);
    });
  };
  
  Polsovatel.getAll = result => {
    sql.query("SELECT * FROM polsovatel", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("polsovatel: ", res);
      result(null, res);
    });
  };
  
  Polsovatel.updateById = (id, polsovatel, result) => {
    sql.query(
      "UPDATE polsovatel SET fullName  = ?, dateOfBirth = ?, mail = ?, telephone = ?, documents = ?, visa = ?,  WHERE id = ?",
      [polsovatel.fullName, polsovatel.dateOfBirth, polsovatel.mail, polsovatel.telephone,polsovatel.documents, polsovatel.visa, id],
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
  
        console.log("updated polsovatel: ", { id: id, ...airport });
        result(null, { id: id, ...airport });
      }
    );
  };
  
  Polsovatel.remove = (id, result) => {
    sql.query("DELETE FROM polsovatel WHERE id = ?", id, (err, res) => {
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
  
      console.log("deleted polsovatel with id: ", id);
      result(null, res);
    });
  };
  
  Polsovatel.removeAll = result => {
    sql.query("DELETE FROM polsovatel", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log(`deleted ${res.affectedRows} polsovatel`);
      result(null, res);
    });
  };
  
  module.exports = Polsovatel;