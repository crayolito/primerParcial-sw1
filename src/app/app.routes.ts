import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.component').then((m) => m.default),
  },
  {
    path: 'chatGeneral',
    loadComponent: () => import('./chat/chat.component').then((m) => m.default),
  },
  {
    path: 'chatSala',
    loadComponent: () =>
      import('./chat-sala/chat-sala.component').then((m) => m.default),
  },
  {
    path: 'salaGeneral',
    loadComponent: () =>
      import('./chatsw1/sala-general/sala-general.component').then(
        (m) => m.default
      ),
  },
  {
    path: 'salaPrivada/:id',
    loadComponent: () =>
      import('./chatsw1/sala-privada/sala-privada.component').then(
        (m) => m.default
      ),
  },
  {
    path: 'diagramador',
    loadComponent: () =>
      import('./diagramador/diagramador.component').then((m) => m.default),
  },
  {
    path: '',
    redirectTo: '/diagramador',
    pathMatch: 'full',
  },
];
