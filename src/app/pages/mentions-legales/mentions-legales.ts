import { Component } from '@angular/core';
import { PERSONAL_INFO } from '../../core/app-constants';

@Component({
  selector: 'app-mentions-legales',
  standalone: true,
  imports: [],
  templateUrl: './mentions-legales.html',
  styleUrl: './mentions-legales.css'
})
export class MentionsLegales {
  personalInfo = PERSONAL_INFO;
}
