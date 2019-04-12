import { Injectable } from '@angular/core';
import { ContextModel } from './context.model';
import { Observable } from 'rxjs';

@Injectable()
export class ContextService implements ContextModel {

  private context: {
    [key:string]: Observable<any>
  } = {};

  private contextMap: { 
    [forComponent:string]: { 
      [prop:string]: Observable<any>
    } 
  } = {};

  constructor() { }

  registerComponent(name: string, component: any) {
    if(this.contextMap[name]) {
      Object.keys(this.contextMap[name]).forEach(prop=>{
        this.contextMap[name][prop].subscribe(p=>component[prop] = p);
      });
    }
  }

  registerKey<T>(key: string, value: Observable<T>, forComponent?: string, as?: string) {
    this.context[key] = value;

    if(forComponent) {
      if(!this.contextMap[forComponent]) {
        this.contextMap[forComponent] = {};
      }
      this.contextMap[forComponent][as?as:key]=value;
    }
  }

  getKey$<T>(key: string, component?: string): Observable<T> {
    return this.context[key];
  }
}
