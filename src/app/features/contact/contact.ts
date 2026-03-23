import { Component } from '@angular/core';
import { inject } from '@angular/core';

import {
  FormBuilder,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact{


private fb = inject(FormBuilder);

  successMessage = false;

  contactForm = this.fb.group({

    name: ['', Validators.required],

    email: ['', [Validators.required, Validators.email]],

    message: ['', [Validators.required, Validators.minLength(10)]]

  });

  submitForm() {

    if (this.contactForm.valid) {

      console.log(this.contactForm.value);

      alert('Message sent successfully!');

      this.contactForm.reset();

    }

  }

}