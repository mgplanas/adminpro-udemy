import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscripcion: Subscription;

  constructor() { 

    this.subscripcion = this.regresaObservable()
    .subscribe( 
      numero => console.log(numero),
      error => console.error('Error ', error),
      () => console.log('Termino')
    );

  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();  
  }
  regresaObservable(): Observable<any> {

    return new Observable( (observer: Subscriber<any>) => {

      let contador = 0;
      const intervalo = setInterval( () => {

        contador++;
        const salida = {
          valor: contador
        };
        observer.next(salida);

        // if (contador === 3) { 
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

      }, 1000 );

    }).pipe(
      map( respuesta => respuesta.valor),
      filter( ( valor, index ) => (valor % 2) === 1)
    );

  }

}
