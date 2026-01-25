import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

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

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        // 1. Priorité aux données statiques de la route (ex: config 404)
        this.route.data.subscribe(data => {
            if (data['code']) this.errorCode = data['code'];
            if (data['message']) this.errorMessage = data['message'];
        });

        // 2. Surcharge avec les données dynamiques (si on redirige manuellement vers /error)
        const state = history.state;
        if (state) {
            if (state['code']) this.errorCode = state['code'];
            if (state['message']) this.errorMessage = state['message'];
        }
    }
}
