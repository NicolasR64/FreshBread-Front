import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import { UserService } from '../../services/UserService'
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add.dialog',
  templateUrl: '../../dialogs/addUser/addUser.dialog.html',
  styleUrls: ['../../dialogs/addUser/addUser.dialog.css']
})

export class AddDialogComponent {
  constructor(public dialogRef: MatDialogRef<AddDialogComponent>, public userService: UserService) { }

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
  // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    // empty stuff
  }
}
