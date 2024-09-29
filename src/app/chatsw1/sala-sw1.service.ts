import { inject, Injectable, signal } from '@angular/core';
import { UsuarioDto } from '../chat/chat.component';
import { WebsocketService } from '../common/services/websocket.service';

export interface SalaSw1 {
  id: string;
}

@Injectable({
  providedIn: 'root',
})
export class SalaSw1Service {
  private _serviceSocket = inject(WebsocketService);
  usuario = signal<UsuarioDto>({ id: '', nombre: '' });

  setUsuarioSession(usuario: UsuarioDto) {
    this.usuario.set(usuario);
  }

  emitInitSalaPrivada(data: { usuario: UsuarioDto; idSala: string }) {
    this._serviceSocket.emit('init-sala-privada', data);
  }

  onListenUpdatedUsuarios() {
    return this._serviceSocket.listen('clientes-conectados-sala-privada');
  }

  onListenUpdatedEventos() {
    return this._serviceSocket.listen('updated-eventos');
  }

  emitAddEventoSw1(evento: string, sala: string) {
    this._serviceSocket.emit('evento-new-sp', {
      idSala: sala,
      evento,
    });
  }

  emitDeleteEventoSw1(evento: string, sala: string) {
    this._serviceSocket.emit('delete-evento-sp', {
      idSala: sala,
      evento,
    });
  }
}
