import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RootInjectableService {
  string = 'Im a variable inside a singleton.'
  constructor() { }
}
