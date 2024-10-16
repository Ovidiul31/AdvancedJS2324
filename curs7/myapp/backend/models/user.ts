import { User } from "./../types/User";
import { db } from "../db";
import { OkPacket, RowDataPacket } from "mysql2";
// Get all users
export const findAll = (callback: Function) => {
  const queryString = `SELECT * FROM jsusers`;
  db.query(queryString, (err, result) => {
    if (err) {
      callback(err);
    }
    const rows = <RowDataPacket[]>result;
    const users: User[] = [];
    rows.forEach((row) => {
      const user: User = {
        id: row.id,
        nume: row.nume,
        prenume: row.prenume,
        email: row.email,
        datanastere: row.datanastere,
        telefon: row.telefon,
        dataadaugare: row.dataadaugare,
        hobby: row.hobby,
        actiune: "",
      };
      users.push(user);
    });
    callback(null, users);
  });
};
// Get one user
export const findOne = (userId: number, callback: Function) => {
  const queryString = `SELECT * FROM jsusers WHERE id=?`;
  db.query(queryString, userId, (err, result) => {
    if (err) {
      callback(err);
    }

    const row = (<RowDataPacket>result)[0];
    const user: User = {
      id: row.id,
      nume: row.nume,
      prenume: row.prenume,
      email: row.email,
      datanastere: row.datanastere,
      telefon: row.telefon,
      hobby: row.hobby,
      //dataadaugare: row.dataadaugare,
    };
    callback(null, user);
  });
};
// create user
export const create = (user: User, callback: Function) => {
  const queryString =
    "INSERT INTO jsusers (nume, prenume, email, datanastere, telefon, hobby) VALUES (?, ?, ?, ?, ?, ?)";
    console.log(user);
  db.query(
    queryString,
    [user.nume, user.prenume, user.email, user.datanastere, user.telefon, user.hobby],
    (err, result) => {
      if (err) {
        callback(err);
      }
    
      
        const insertId = (<OkPacket>result).insertId;
        callback(null, insertId);
      
    }
  );
};

// update user
export const update = (user: User, callback: Function) => {
  const queryString = `UPDATE jsusers SET prenume=?, nume=?, email=?, telefon=?, hobby=? WHERE id=?`;

  db.query(queryString, [user.prenume, user.nume, user.email, user.telefon, user.hobby, user.id], (err, result) => {
    if (err) {
      callback(err);
    }
    callback(null);
  });
};
// delete user
export const deleteUser = (user: User, callback: Function) => {
  const queryString = `DELETE FROM jsusers WHERE id=?`;

  db.query(queryString, [user.id], (err, result) => {
    if (err) {
      callback(err);
    }
    callback(null);
  });
};