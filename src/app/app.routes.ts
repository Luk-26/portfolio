import { Routes } from '@angular/router';
import { Accueil } from './pages/accueil/accueil';
import { Contact } from './pages/contact/contact';
import { Projets } from './pages/projets/projets';
import { Experiences } from './pages/experiences/experiences';

export const routes: Routes = [
    { path: "", component: Accueil, title: "Accueil - Portfolio Lucas GUILLEMAUD" },
    { path: "projets", component: Projets, title: "Mes Projets - Portfolio Lucas GUILLEMAUD" },
    { path: "experiences", component: Experiences, title: "Mes Expériences - Portfolio Lucas GUILLEMAUD" },
    { path: "contact", component: Contact, title: "Contact - Portfolio Lucas GUILLEMAUD" },
];
