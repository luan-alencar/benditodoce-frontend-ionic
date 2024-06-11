import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioDTO } from '../../models/usuario.dto';
import { ClienteService } from '../../services/domain/cliente.service';

@IonicPage()
@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html',
})
export class UsuariosPage {

  usuarios: UsuarioDTO[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public clienteService: ClienteService) {
  }

  ionViewDidLoad() {
    this.loadUsuarios();
  }

  loadUsuarios() {
    this.clienteService.findAll().subscribe(
      response => {
        this.usuarios = response;
      },
      error => {
        console.error("Erro ao carregar usuários", error);
      }
    );
  }

  doRefresh(event) {
    this.clienteService.findAll().subscribe(
      response => {
        this.usuarios = response;
        event.complete();
      },
      error => {
        console.error("Erro ao carregar usuários", error);
        event.complete();
      }
    );
  }

  showDetail(usuarioId: any) {
    console.log('Exibir detalhes do usuário com ID:', usuarioId);
  }
}
