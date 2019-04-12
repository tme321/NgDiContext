import { Observable } from "rxjs";

export interface ContextModel {
    registerComponent(name: string, component: any): void;
    registerKey<T>(key: string, value: Observable<T>, forComponent?: string, as?: string):void;
    getKey$<T>(key: string, component?: string): Observable<T>;
}