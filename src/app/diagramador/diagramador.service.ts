import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, SalaDiagrama } from '../auth/auth.service';
import { WebsocketService } from '../common/services/websocket.service';

@Injectable({
  providedIn: 'root',
})
export class DiagramadorService {
  public http = inject(HttpClient);
  public wsService = inject(WebsocketService);
  public userAuth = inject(AuthService);
  private _salaDiagrama = signal<SalaDiagrama | null>(null);

  setSalaDiagrama(salaDiagrama: SalaDiagrama): void {
    this._salaDiagrama.set(salaDiagrama);
  }

  getSalaDiagrama(): SalaDiagrama | null {
    return this._salaDiagrama();
  }

  onListenChangedDiagrama() {
    return this.wsService.listen('changed-diagrama');
  }

  emitChangedDiagrama(diagrama: string) {
    this.wsService.emit('changed-diagrama', {
      id: this.userAuth.getSalaDiagrama()!.id,
      diagrama,
    });
  }

  contenidoVerifDiagramaBD(nombreSala: string): Observable<any> {
    return this.http.get<any>('http://localhost:3000/salas/' + nombreSala);
  }
}
