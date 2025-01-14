import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'observable', pathMatch: 'full' },
  {
    path: 'observable',
    loadComponent: () =>
      import('./observable/observable.component').then(
        (m) => m.ObservableComponent
      ),
  },
  {
    path: 'subject',
    loadComponent: () =>
      import('./observable/subject/subject.component').then(
        (m) => m.SubjectComponent
      ),
  },
  {
    path: 'signal',
    loadComponent: () =>
      import('./signals/signals.component').then((m) => m.SignalsComponent),
    children: [
      {
        path: 'writable',
        loadComponent: () =>
          import('./signals/writable-signal/writable-signal.component').then(
            (m) => m.WritableSignalComponent
          ),
      },
      {
        path: 'computed',
        loadComponent: () =>
          import('./signals/computed/computed.component').then(
            (m) => m.ComputedComponent
          ),
      },
    ],
  },
  {
    path: 'file',
    loadComponent: () =>
      import('./file-upload-download/file-upload-download.component').then(
        (m) => m.FileUploadDownloadComponent
      ),
  },
];
