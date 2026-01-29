import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';

interface Projet {
  id: number;
  titre: string;
  description: string;
  technos: string[];
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
  annee: string;
}

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './projets.html',
  styleUrl: './projets.css',
})
export class Projets {
  projets: Projet[] = [
    {
      id: 3,
      titre: 'Jeu Maux de Passe',
      description: 'Application web éducative de sensibilisation à la cybersécurité. Le but est de composer des paires mot de passe/solidité (temps estimé de craquage).<br>Projet réalisé en stage pour le [CMQ IED_AURA].',
      technos: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Responsive Design'],
      imageUrl: 'images/projets/imgJeuMdp.webp',
      githubUrl: 'https://github.com/Luk-26/SiteJeuMdP',
      demoUrl: '',
      annee: '2026'
    },
    {
      id: 2,
      titre: 'Portfolio',
      description: 'Le site sur lequel vous naviguez actuellement ! Il a pour objectif de mettre en avant mes compétences et mes projets en tant que développeur.',
      technos: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Responsive Design', 'Netlify'],
      imageUrl: 'images/projets/imgPortfolio.webp',
      githubUrl: 'https://github.com/Luk-26/portfolio',
      demoUrl: 'https://lucasguillemaud-portfolio.netlify.app',
      annee: '2026'
    },
    {
      id: 1,
      titre: 'Script de vérification mot de passe BIOS',
      description: 'Outil d\'automatisation PowerShell pour auditer la sécurité des BIOS d\'un parc informatique de plusieurs centaines de postes. Stockage des rapports en base de données SQL.<br>Projet réalisé en stage pour la DSIA de KOESIO AURA.',
      technos: ['PowerShell', 'SQL Server', 'MySQL', 'GLPI'],
      imageUrl: 'images/projets/imgScriptMdpBios.webp',
      annee: '2025'
    }
  ];
}
