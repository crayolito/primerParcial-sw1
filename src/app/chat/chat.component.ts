import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { WebsocketService } from '../common/services/websocket.service';
import { ChatService } from './chat.service';

export interface UsuarioDto {
  id: string;
  nombre: string;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export default class ChatComponent implements OnInit, OnDestroy {
  serviceChat = inject(ChatService);
  private _serviceSocket = inject(WebsocketService);
  private mensajeClientsSubscription!: Subscription;

  public valueInputName = signal<string>('');

  ngOnInit(): void {
    // READ : ESCUCHAR MENSAJES DEL SERVIDOR CLIENTES CONECTADOS
    this.mensajeClientsSubscription = this.serviceChat
      .escucharListaUsuarios()
      .subscribe((usuarios: UsuarioDto[]) => {
        this.serviceChat.actualizarListaUsuarios(usuarios);
      });
  }

  ngOnDestroy(): void {
    this.mensajeClientsSubscription.unsubscribe();
  }

  get userPrincipal(): UsuarioDto {
    return this.serviceChat.usuario();
  }

  // READ : INICIAR SESION DE USUARIO
  public iniciarSesion(): void {
    if (!this._serviceSocket.socketStatus()) return;

    const usuario: UsuarioDto = {
      id: this._serviceSocket.socket.ioSocket.id,
      nombre: this.valueInputName(),
    };
    this.serviceChat.enviarMInitChatGeneral(usuario);
    this.serviceChat.usuarioSession(usuario);
    this.serviceChat.actualizarListaUsuarios([
      usuario,
      ...this.serviceChat.usuariosConectados,
    ]);
  }

  onChangeValueInput(contenido: string) {
    this.valueInputName.update((value: string) => {
      return contenido;
    });
  }

  public estadoConexionSocket(): boolean {
    return this._serviceSocket.socketStatus();
  }
}
