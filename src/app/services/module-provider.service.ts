import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModuleProviderService {
  message: string = 'Este es un mensaje desde el servicio';
}
