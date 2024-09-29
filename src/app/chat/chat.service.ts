import { inject, Injectable, signal } from '@angular/core';
import { WebsocketService } from '../common/services/websocket.service';
import { UsuarioDto } from './chat.component';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private _serviceSocket = inject(WebsocketService);
  usuariosConectados: UsuarioDto[] = [];
  usuario = signal<UsuarioDto>({ id: '', nombre: '' });

  public usuarioSession(usuario: UsuarioDto) {
    this.usuario.set(usuario);
  }

  public estadoConexionSocket(): boolean {
    return this._serviceSocket.socketStatus();
  }

  public actualizarListaUsuarios(usuarios: UsuarioDto[]) {
    this.usuariosConectados = usuarios;
  }

  // READ : ENVIAR DATA AL SERVIDOR MEDIANTE EVENTO SOCKET
  public enviarMInitChatGeneral(mensaje: UsuarioDto) {
    this._serviceSocket.emit('init-chatGeneral', mensaje);
  }

  public escucharMensajes() {
    return this._serviceSocket.listen('mensaje-servidor');
  }

  public escucharListaUsuarios() {
    return this._serviceSocket.listen('clientes-conectados');
  }
}
