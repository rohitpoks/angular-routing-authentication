import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatorService {
  constructor(private fb: FormBuilder) {}

  registrationForm = this.fb.group({
    authenticated: [false],
  });

  authenticated() {
    return this.registrationForm.get('authenticated')?.value;
  }

  get_form() {
    return this.registrationForm;
  }
}
