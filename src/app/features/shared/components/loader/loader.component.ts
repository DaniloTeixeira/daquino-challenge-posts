import { Component, inject, Input } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  private loaderService = inject(LoaderService);

  showLoader$ = this.loaderService.showLoader$;
  loaderText$ = this.loaderService.loaderText$;
}
