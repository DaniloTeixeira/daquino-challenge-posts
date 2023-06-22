import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  showLoader$: Observable<boolean>;
  loaderText$ = new BehaviorSubject<string | string[]>('');

  #openedLoaders$ = new BehaviorSubject<string[]>([]);

  constructor() {
    this.showLoader$ = this.#openedLoaders$.pipe(map((n) => n.length > 0));
  }

  close(): void {
    const [, ...loaders] = this.#openedLoaders$.getValue();
    this.#openedLoaders$.next(loaders);
  }

  open(loaderText: string = ''): void {
    this.#setLoaderText(loaderText);
  }

  #setLoaderText(loaderText: string): void {
    this.loaderText$.next(loaderText);
    this.#openedLoaders$.next([...this.#openedLoaders$.getValue(), loaderText]);
  }
}
