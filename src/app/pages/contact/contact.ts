import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PERSONAL_INFO } from '../../core/app-constants';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  personalInfo = PERSONAL_INFO;
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      societe: [''], // Champ optionnel suggéré
      objet: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitError = false;

      const formData = new URLSearchParams();
      formData.append('form-name', 'contact');

      // On ajoute toutes les valeurs du formulaire
      Object.keys(this.contactForm.value).forEach(key => {
        formData.append(key, this.contactForm.value[key]);
      });

      fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString()
      })
        .then(() => {
          this.submitSuccess = true;
          this.contactForm.reset();
          this.isSubmitting = false;
        })
        .catch(error => {
          console.error('Erreur d\'envoi', error);
          this.submitError = true;
          this.isSubmitting = false;
        });
    } else {
      // Marquer tous les champs comme touchés pour afficher les erreurs
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}

