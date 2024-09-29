import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UsuarioDto } from '../chat/chat.component';
import { WebsocketService } from '../common/services/websocket.service';
import { ChatSalaService } from './chat-sala.service';

@Component({
  selector: 'app-chat-sala',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chat-sala.component.html',
  styleUrl: './chat-sala.component.css',
})
export default class ChatSalaComponent implements OnInit, OnDestroy {
  chatSalaService = inject(ChatSalaService);
  private _serviceSocket = inject(WebsocketService);
  private mensajeClientsSubscription!: Subscription;
  public valueInputName = signal<string>('');

  public salaSelect = signal<string>('');
  public itemsSalas: string[] = ['Sala 1', 'Sala 2', 'Sala 3'];

  ngOnDestroy(): void {
    this.mensajeClientsSubscription.unsubscribe();
  }
  ngOnInit(): void {
    // READ : ESCUCHAR MENSAJES DEL SERVIDOR CLIENTES CONECTADOS
    this.mensajeClientsSubscription = this.chatSalaService
      .escucharListaUsuarios()
      .subscribe((usuarios: UsuarioDto[]) => {
        console.log(usuarios);
        this.chatSalaService.actualizarListaUsuarios(usuarios);
      });
  }

  // READ : INICIAR SESION DE USUARIO
  public iniciarSesion(): void {
    if (this.salaSelect() == '') return;
    if (!this._serviceSocket.socketStatus()) return;

    const usuario: UsuarioDto = {
      id: this._serviceSocket.socket.ioSocket.id,
      nombre: this.valueInputName(),
    };
    this.chatSalaService.enviarMInitChatSala(usuario, this.salaSelect());
    this.chatSalaService.usuarioSession(usuario);
    this.chatSalaService.actualizarListaUsuarios([usuario]);
  }

  onChangeValueInput(contenido: string) {
    this.valueInputName.update((value: string) => {
      return contenido;
    });
  }

  public estadoConexionSocket(): boolean {
    return this._serviceSocket.socketStatus();
  }

  get userPrincipal(): UsuarioDto {
    return this.chatSalaService.usuario();
  }

  selectSala(sala: string): void {
    this.salaSelect.update((value: string) => {
      return sala;
    });
  }
}
