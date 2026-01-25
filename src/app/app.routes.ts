import { Routes } from '@angular/router';
import { Accueil } from './pages/accueil/accueil';
import { Contact } from './pages/contact/contact';
import { Projets } from './pages/projets/projets';
import { Experiences } from './pages/experiences/experiences';
import { ErrorPageComponent } from './pages/error/error';

export const routes: Routes = [
    { path: "", component: Accueil, title: "Accueil - Lucas GUILLEMAUD" },
    { path: "projets", component: Projets, title: "Mes Projets - Lucas GUILLEMAUD" },
    { path: "experiences", component: Experiences, title: "Mes Expériences - Lucas GUILLEMAUD" },
    { path: "contact", component: Contact, title: "Contact - Lucas GUILLEMAUD" },
    { path: "mentions-legales", loadComponent: () => import('./pages/mentions-legales/mentions-legales').then(m => m.MentionsLegales), title: "Mentions Légales - Lucas GUILLEMAUD" },

    // Route générique pour redirection manuelle (ex: Erreur 500)
    { path: "error", component: ErrorPageComponent, title: "Erreur - Lucas GUILLEMAUD" },

    {
        path: "**",
        component: ErrorPageComponent,
        title: "Page non trouvée - Lucas GUILLEMAUD",
        data: { code: '404', message: "Oups ! La page que vous cherchez n'existe pas." }
    }
];
