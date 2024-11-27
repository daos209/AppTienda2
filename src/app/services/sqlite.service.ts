import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class SqliteService {
  private dbInstance: SQLiteObject | null = null;
  readonly dbName: string = 'apptienda.db';
  readonly dbTable: string = 'users';
  users: Array<any> = [];

  constructor(private sqlite: SQLite) {
    this.createDatabase();
  }

  // Crear la base de datos
  createDatabase() {
    this.sqlite.create({
      name: this.dbName,
      location: 'default'
    })
    .then((db: SQLiteObject) => {
      this.dbInstance = db;
      db.executeSql(`
        CREATE TABLE IF NOT EXISTS ${this.dbTable} (
          id INTEGER PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL
        )`, [])
      .then(() => {
        console.log('Tabla creada');
      })
      .catch(e => console.log(e));
    })
    .catch(e => console.log(e));
  }

  // Obtener todos los usuarios
  getUsers() {
    if (!this.dbInstance) {
      return Promise.resolve([]);
    }
    return this.dbInstance.executeSql(`SELECT * FROM ${this.dbTable}`, []).then((res) => {
      this.users = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          this.users.push(res.rows.item(i));
        }
      }
      return this.users;
    }, (e) => {
      console.log(e);
      return [];
    });
  }

  // Agregar un nuevo usuario
  addUser(name: string, email: string) {
    if (!this.dbInstance) {
      return Promise.reject('Database not initialized');
    }
    let data = [name, email];
    return this.dbInstance.executeSql(`INSERT INTO ${this.dbTable} (name, email) VALUES (?, ?)`, data).then(() => {
      this.getUsers();
    }, (e) => {
      console.log(e);
    });
  }

  // Eliminar un usuario
  deleteUser(id: number) {
    if (!this.dbInstance) {
      return Promise.reject('Database not initialized');
    }
    return this.dbInstance.executeSql(`DELETE FROM ${this.dbTable} WHERE id = ?`, [id]).then(() => {
      this.getUsers();
    }, (e) => {
      console.log(e);
    });
  }
}