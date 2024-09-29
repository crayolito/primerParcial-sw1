import { inject, Injectable, signal } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  // LOGIC : ESTADO DE CONEXION CON EL SOCKET SERVER
  public socketStatus = signal(false);
  public socket: Socket = inject(Socket);

  constructor() {
    this.checkStatus();
  }

  // LOGIC : HACE UN CHECKING DEL ESTADO DEL SOCKET SERVER Y LO MUESTRA POR CONSOLA
  checkStatus(): void {
    this.socket.on('connect', () => {
      this.socketStatus.set(true);
    });

    this.socket.on('disconnect', () => {
      this.socketStatus.set(false);
    });
  }

  // LOGIC : EMITE UN EVENTO AL SOCKET SERVER (DE FORMA GENERAL)
  emit(event: string, payload?: any, callback?: Function): void {
    this.socket.emit(event, payload, callback);
  }

  // LOGIC : ESCUCHA UN EVENTO DEL SOCKET SERVER (DE FORMA GENERAL)
  listen(event: string): any {
    return this.socket.fromEvent(event);
  }
}
