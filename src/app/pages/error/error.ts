import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-error-page',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './error.html',
    styleUrls: ['./error.css']
})
export class ErrorPageComponent implements OnInit {
    errorCode: string = '404';
    errorMessage: string = "Oups ! La page que vous cherchez semble avoir disparu dans le néant.";

    constructor(
        private route: ActivatedRoute,
        @Inject(PLATFORM_ID) private platformId: Object
    ) { }

    ngOnInit(): void {
        // 1. Priorité aux données statiques de la route (ex: config 404)
        this.route.data.subscribe(data => {
            if (data['code']) this.errorCode = data['code'];
            if (data['message']) this.errorMessage = data['message'];
        });

        // 2. Surcharge avec les données dynamiques UNIQUEMENT CÔTÉ NAVIGATEUR
        if (isPlatformBrowser(this.platformId)) {
            const state = history.state;
            if (state) {
                if (state['code']) this.errorCode = state['code'];
                if (state['message']) this.errorMessage = state['message'];
            }
        }
    }
}
