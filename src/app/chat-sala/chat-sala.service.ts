import { inject, Injectable, signal } from '@angular/core';
import { UsuarioDto } from '../chat/chat.component';
import { WebsocketService } from '../common/services/websocket.service';

@Injectable({
  providedIn: 'root',
})
export class ChatSalaService {
  private _serviceSocket = inject(WebsocketService);
  usuariosConectados: UsuarioDto[] = [];
  usuario = signal<UsuarioDto>({ id: '', nombre: '' });
  constructor() {}

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
  public enviarMInitChatSala(mensaje: UsuarioDto, sala: string) {
    this._serviceSocket.emit('entra-sala', {
      usuario: mensaje,
      sala,
    });
  }

  public escucharListaUsuarios() {
    return this._serviceSocket.listen('clientes-conectados-sala');
  }
}
