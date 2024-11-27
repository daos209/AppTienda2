import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { SqliteService } from '../services/sqlite.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  users: any[] = [];
  nuevoUsuario = { name: '', email: '' };

  constructor(private apiService: ApiService, private sqliteService: SqliteService) {}

  ngOnInit() {
    this.apiService.getUsers().subscribe(data => {
      this.users = data;
    });
    this.sqliteService.getUsers().then(data => {
      this.users = data;
    });
  }

  agregarUsuario() {
    this.sqliteService.addUser(this.nuevoUsuario.name, this.nuevoUsuario.email).then(() => {
      this.nuevoUsuario = { name: '', email: '' }; // Resetear el formulario
      this.sqliteService.getUsers().then(data => {
        this.users = data;
      });
    });
  }

  eliminarUsuario(id: number) {
    this.sqliteService.deleteUser(id).then(() => {
      this.sqliteService.getUsers().then(data => {
        this.users = data;
      });
    });
  }
}