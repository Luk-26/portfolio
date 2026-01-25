import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  id: number;
  date: string;
  titre: string;
  entreprise: string;
  lieu?: string;
  description: string;
  taches: string[];
  technos: string[];
}

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.html',
  styleUrls: ['./experiences.css']
})
export class Experiences {
  experiences: Experience[] = [
    {
      id: 6,
      date: 'Été 2026 - été 2027',
      titre: 'Recherche d\'alternance !',
      entreprise: 'inconnu',
      lieu: 'inconnu',
      description: 'Je suis à la recherche d\'une alternance en informatique pour mon année de L3 informatique.<br><b>Si mon profil vous intéresse, n\'hésitez pas à me <a href="/contact">contacter</a> !</b>',
      taches: [],
      technos: ['Dev web', 'Programmation orientée objet', 'Base de données', 'Système et réseaux', 'Cybersécurité']
    },
    {
      id: 5,
      date: 'Decembre 2025 - Février 2026',
      titre: 'Développeur web (stage 2ème année BTS SIO)',
      entreprise: '[CMQ IED_AURA]',
      lieu: 'Valence, France',
      description: 'Création d\'un site afin de créer une version digitale d\'un jeu pédagogique sur la cybersécurité et les mots de passe.',
      taches: [
        'Découverte du jeu pédagogique et des objectifs du site web.',
        'Création de la maquette du site web.',
        'Création du site web avec Angular.',
        'Présentation du site à l\'équipe du CMQ et prise en compte des retours.',
        'Modification du site web en fonction des retours de l\'équipe.',
        'Phase de test en condition réel lors d\'un évenement pédagogique.',
        'Prise en compte des retours des utilisateurs et modification du site web en fonction des retours.'
      ],
      technos: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Maquettage']
    },
    {
      id: 4,
      date: 'été 2025',
      titre: 'Emploi saisonnier',
      entreprise: 'Goutard emballage',
      lieu: 'Chabeuil, France',
      description: 'Travail à l\'usine de Goutard emballage.',
      taches: [
        'Préparation des machines.',
        'Remplissage de palette de caguettes en carton en sortie de machine.',
        'Passage des palettes à la filmeuse.',
        'Remplissage des camions de livraison.'
      ],
      technos: []
    },
    {
      id: 3,
      date: 'mai 2025 - Juin 2025',
      titre: 'Développeur PowerShell (stage 1ère année BTS SIO)',
      entreprise: 'KOESIO AURA',
      lieu: 'Valence, France',
      description: 'Création d\'un script PowerShell pour vérifier la présence de mots de passe sur les BIOS des ordinateurs des collaborateurs.',
      taches: [
        'Création d\'un premier script fonctionnant en local avec enregistrement dans un fichier csv.',
        'Modification du script pour que l\'enregistrement se fasse dans une base de données MySQL.',
        'Rédaction du script de création de la base de données MySQL.',
        'Adaptation des scripts pour une base de données SQL Server.',
        'Recherche des moyens de mise en production des scripts via GLPI.'
      ],
      technos: ['PowerShell', 'Windows', 'SQL', 'MySQL', 'SQL Server', 'GLPI']
    },
    {
      id: 2,
      date: 'été 2024',
      titre: 'Emploi saisonnier',
      entreprise: 'Goutard emballage',
      lieu: 'Chabeuil, France',
      description: 'Travail à l\'usine de Goutard emballage.',
      taches: [
        'Préparation des machines.',
        'Remplissage de palette de caguettes en carton en sortie de machine.',
        'Passage des palettes à la filmeuse.',
        'Remplissage des camions de livraison.'
      ],
      technos: []
    },
    {
      id: 1,
      date: 'été 2023',
      titre: 'Emploi saisonnier',
      entreprise: 'Goutard emballage',
      lieu: 'Chabeuil, France',
      description: 'Travail à l\'usine de Goutard emballage.',
      taches: [
        'Préparation des machines.',
        'Remplissage de palette de caguettes en carton en sortie de machine.',
        'Passage des palettes à la filmeuse.',
        'Remplissage des camions de livraison.'
      ],
      technos: []
    }
  ];
}
