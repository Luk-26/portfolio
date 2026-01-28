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
      id: 4,
      date: 'Éte 2026 - été 2027',
      titre: 'Étudiant en Licence 3 Informatique (Alternance)',
      entreprise: 'Votre Entreprise ?',
      lieu: 'Valence, Chabeuil et alentours',
      description: 'Pour votre entreprise, je souhaite mettre à profit mes compétences en développement web, applicatif et en base de données, tout en continuant à monter en compétence grâce à ma formation.<br><b>Je suis prêt à m\'investir pleinement dans vos projets !</b>',
      taches: [],
      technos: ['Développement web', 'Programmation orientée objet', 'Base de données', 'Système et réseaux', 'Cybersécurité', 'Versionning', 'Veille technologique']
    },
    {
      id: 3,
      date: 'Décembre 2025 - Février 2026',
      titre: 'Développeur web (Stage)',
      entreprise: '[CMQ IED_AURA]',
      lieu: 'Valence, France',
      description: '<b>Contexte :</b> Modernisation des outils pédagogiques pour la sensibilisation à la cybersécurité.<br><b>Mission :</b> Conception et développement d\'une application web interactive "Jeu maux de passe" pour remplacer une version papier.',
      taches: [
        'Découverte du jeu pédagogique et des objectifs du site web.',
        'Création de la <b>maquette</b> du site web.',
        'Création du site web avec <b>Angular</b>.',
        'Présentation du site à l\'équipe du CMQ et prise en compte des retours.',
        'Modification du site web en fonction des retours de l\'équipe.',
        'Phase de test en conditions réelles lors d\'un événement pédagogique.',
        'Modification du site web en fonction des retours utilisateurs.'
      ],
      technos: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Maquettage', 'Git', 'GitHub', 'cahier de charges']
    },
    {
      id: 2,
      date: 'Mai 2025 - Juin 2025',
      titre: 'Développeur Automatisation & Scripting (Stage)',
      entreprise: 'KOESIO AURA',
      lieu: 'Valence, France',
      description: '<b>Contexte :</b> Renforcement de la politique de sécurité du parc informatique de l\'entreprise.<br><b>Mission :</b> Vérification et sécurisation automatisée des BIOS des postes de travail via scripting.<br>Ce script rejoindra le script déjà existant de mise en place des mots de passe des BIOS.',
      taches: [
        'Création d\'un premier script <b>PowerShell</b> fonctionnant en local avec enregistrement dans un fichier csv.',
        'Modification du script <b>PowerShell</b> pour que l\'enregistrement se fasse dans une base de données <b>MySQL</b>.',
        'Rédaction du script de création de la base de données <b>MySQL</b>.',
        'Adaptation des scripts <b>PowerShell</b> pour une base de données <b>SQL Server</b>.',
        'Recherche des moyens de mise en production des scripts via <b>GLPI</b>.',
        'Autres tâches hors projet (préparation de postes, installation d\'écrans, ...).'
      ],
      technos: ['PowerShell', 'Windows', 'SQL', 'MySQL', 'SQL Server', 'Git', 'GitHub', 'GLPI']
    },
    {
      id: 1,
      date: 'Été 2023, 2024, 2025',
      titre: 'Agent de Production (Saisonnier)',
      entreprise: 'Goutard Emballage',
      lieu: 'Chabeuil, France',
      description: '<b>Contexte :</b> Travail posté en usine de production d\'emballages.<br>Cette expérience m\'a permis de développer ma <b>rigueur</b>, ma <b>ponctualité</b> et ma capacité à <b>travailler en équipe</b> dans un environnement industriel exigeant.',
      taches: [
        'Gestion de ligne de production et contrôle qualité.',
        'Respect strict des normes de sécurité et des cadences.',
        'Travail d\'équipe et coordination.'
      ],
      technos: ['Travail d\'équipe', 'Rigueur', 'Endurance', 'Flexibilité']
    }
  ];
}
