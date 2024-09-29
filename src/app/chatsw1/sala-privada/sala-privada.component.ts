import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsuarioDto } from '../../chat/chat.component';
import { WebsocketService } from '../../common/services/websocket.service';
import { SalaSw1Service } from '../sala-sw1.service';

@Component({
  selector: 'app-sala-privada',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './sala-privada.component.html',
  styleUrl: './sala-privada.component.css',
})
export default class SalaPrivadaComponent implements OnInit, OnDestroy {
  private _serviceSocket = inject(WebsocketService);
  public salaSw1Service = inject(SalaSw1Service);
  private route = inject(ActivatedRoute);
  onListenUpdatedUsuarios!: Subscription;
  onListenUpdatedEventos!: Subscription;
  listaUsuariosConectados: UsuarioDto[] = [];
  listaEventosSw1: string[] = [];
  public inputEvento = signal<string>('');
  idSala = this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.salaSw1Service.emitInitSalaPrivada({
      idSala: this.idSala!,
      usuario: this.salaSw1Service.usuario(),
    });

    this.onListenUpdatedUsuarios = this.salaSw1Service
      .onListenUpdatedUsuarios()
      .subscribe((usuarios: UsuarioDto[]) => {
        this.listaUsuariosConectados = usuarios;
      });

    this.onListenUpdatedEventos = this.salaSw1Service
      .onListenUpdatedEventos()
      .subscribe((eventos: string[]) => {
        this.listaEventosSw1 = eventos;
      });
  }

  ngOnDestroy(): void {
    this.onListenUpdatedUsuarios.unsubscribe();
    this.onListenUpdatedEventos.unsubscribe();
  }

  public getEstadoConexionSocket(): boolean {
    return this._serviceSocket.socketStatus();
  }

  getUserPrincipal(): UsuarioDto {
    return this.salaSw1Service.usuario();
  }

  addEvento(): void {
    this.listaEventosSw1.push(this.inputEvento());
    this.salaSw1Service.emitAddEventoSw1(this.inputEvento(), this.idSala!);
    this.inputEvento.set('');
  }

  deleteEvento(evento: string): void {
    this.listaEventosSw1 = this.listaEventosSw1.filter((e) => e !== evento);
    this.salaSw1Service.emitDeleteEventoSw1(evento, this.idSala!);
  }
}
