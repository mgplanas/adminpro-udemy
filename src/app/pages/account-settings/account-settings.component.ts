import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public ajustes: SettingsService  ) { }

  ngOnInit() {
  }

  cambiarColor( color: string , link: any ) {

    this.aplicarCheck(link);

    this.ajustes.aplicarTema( color );
  }

  aplicarCheck( link: any ) {
    const selectores: any = document.getElementsByClassName('selector');

    for ( const ref of selectores ) {
      ref.classList.remove('working');

      link.classList.add('working');
    }
  }
}
