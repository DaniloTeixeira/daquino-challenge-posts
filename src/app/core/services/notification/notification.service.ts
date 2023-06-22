import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  #matSnackBar = inject(MatSnackBar);

  error(msg: string): void {
    this.#matSnackBar.open(`${msg}`, 'Close!', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['notification-error'],
    });
  }

  success(msg: string): void {
    this.#matSnackBar.open(`${msg}`, 'Close!', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['notification-success'],
    });
  }
}
