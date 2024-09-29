import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { UsuarioDto } from '../../chat/chat.component';
import { WebsocketService } from '../../common/services/websocket.service';
import { SalaSw1Service } from '../sala-sw1.service';

@Component({
  selector: 'app-sala-general',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './sala-general.component.html',
  styleUrl: './sala-general.component.css',
})
export default class SalaGeneralComponent {
  private _serviceSocket = inject(WebsocketService);
  salaSw1Service = inject(SalaSw1Service);
  private router = inject(Router);
  public inputName = signal<string>('');
  public inputSala = signal<string>('');

  public iniciarSesion(): void {
    if (this.inputName() == '') return;
    const usuario: UsuarioDto = {
      id: this._serviceSocket.socket.ioSocket.id,
      nombre: this.inputName(),
    };

    const uuid = uuidv4();
    const codigoSala = uuid.substring(0, 8);

    this.salaSw1Service.setUsuarioSession(usuario);
    this.router.navigate([`salaPrivada/${codigoSala}`]);
  }

  public iniciarMedianteIdSala(): void {
    if (this.inputSala() == '' && this.inputName() == '') return;
    const usuario: UsuarioDto = {
      id: this._serviceSocket.socket.ioSocket.id,
      nombre: this.inputName(),
    };

    this.salaSw1Service.setUsuarioSession(usuario);
    this.router.navigate([`salaPrivada/${this.inputSala()}`]);
  }

  public emitInitSalaPrivada(): void {
    if (this.inputName() == '') return;
    this.salaSw1Service.emitInitSalaPrivada({
      idSala: this.inputSala(),
      usuario: this.getUserPrincipal(),
    });
  }

  public getEstadoConexionSocket(): boolean {
    return this._serviceSocket.socketStatus();
  }

  public getUserPrincipal(): UsuarioDto {
    return this.salaSw1Service.usuario();
  }

  onChangeInputName(contenido: string): void {
    this.inputName.update((value: string) => {
      return contenido;
    });
  }

  onChangeInputSala(contenido: string): void {
    this.inputSala.update((value: string) => {
      return contenido;
    });
  }
}
