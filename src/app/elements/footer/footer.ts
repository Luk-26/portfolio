import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PERSONAL_INFO } from '../../core/app-constants';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  personalInfo = PERSONAL_INFO;
  currentYear = new Date().getFullYear();
}
