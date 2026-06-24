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
      id: 7,
      titre: 'Minebox tools',
      description: 'Création d\'outils autour de l\'API du serveur minecraft Minebox : classements, profils, guildes, votes, etc.<br>Temporairement le lien GitHub pointe vers la documentation de l\'API et le lien demo pointe vers le site officiel de Minebox.',
      technos: ['Site web', 'Application Android', 'Utilisation de l\'API publique de Minebox'],
      imageUrl: 'images/projets/imgMinebox.webp',
      githubUrl: 'https://api.minebox.co/docs',
      demoUrl: 'https://minebox.co/fr',
      annee: '2026'
    },
    {
      id: 6,
      titre: 'Minebox - PlayerProfil',
      description: 'Site web utilisant l\'API publique du serveur Minecraft Minebox pour permettre aux utilisateurs de voir le profil d\'un joueur ainsi que différentes informations sur sa guilde en recherchant son pseudo.',
      technos: ['HTML', 'CSS', 'JavaScript', 'API', 'Netlify'],
      imageUrl: 'images/projets/imgMinebox.webp',
      githubUrl: 'https://github.com/Luk-26/Minebox-PlayerProfil',
      demoUrl: 'https://minebox-playerprofil.netlify.app',
      annee: 'juin 2026'
    },
    {
      id: 5,
      titre: 'Projets VEM - application web et API',
      description: 'Application web permettant de gérer le personnel de l\'entreprise fictive d\'exploitation minière VEM, ainsi que leurs foreuses, capteurs, relevés des capteurs, stocks et déplacement des minerais.<br>Une API permet de voir les stocks et déplacements de minerais, ainsi que d\'en initier de nouveaux.',
      technos: ['Laravel', 'PHP', 'HTML', 'CSS', 'PostgreSQL', 'API'],
      imageUrl: 'images/projets/imgBtsSio.webp',
      githubUrl: 'https://github.com/Luk-26/BTSSIO2-AP-PROJET-VEM-WEBAPP',
      demoUrl: '',
      annee: 'Début - Mi 2026'
    },
    {
      id: 4,
      titre: 'Projets VEM - application mobile',
      description: 'Application mobile utilisant les données de l\'API du site web de VEM pour permettre aux techniciens de l\'entreprise de voir les relevés des capteurs des foreuses, les stocks et l\'historique des transferts de minerais, ainsi que d\'initier de nouveaux transferts lorsqu\'ils sont sur le terrain.',
      technos: ['Kotlin', 'Android', 'XML', 'API'],
      imageUrl: 'images/projets/imgBtsSio.webp',
      githubUrl: 'https://github.com/Luk-26/BTSSIO2-AP-PROJET-VEM-ANDROIDAPP',
      demoUrl: '',
      annee: 'Début - Mi 2026'
    },
    {
      id: 3,
      titre: 'Portfolio',
      description: 'Le site web sur lequel vous naviguez actuellement !<br>Il a pour objectif de mettre en avant mes compétences, mon parcours, mes projets et mes expériences en tant qu\'étudiant et futur développeur.',
      technos: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Netlify'],
      imageUrl: 'images/projets/imgPortfolio.webp',
      githubUrl: 'https://github.com/Luk-26/portfolio',
      demoUrl: 'https://lucasguillemaud-portfolio.netlify.app',
      annee: '2026 - aujourd\'hui'
    },
    {
      id: 2,
      titre: 'Jeu Maux de Passe',
      description: 'Application web éducative de sensibilisation à la cybersécurité. Le but est de composer des paires mot de passe/solidité (temps estimé de craquage).<br>Projet réalisé en stage pour le [CMQ IED_AURA].',
      technos: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      imageUrl: 'images/projets/imgJeuMdp.webp',
      githubUrl: 'https://github.com/Luk-26/SiteJeuMdP',
      demoUrl: 'https://mauxdepasse.cmqiedaura.fr',
      annee: 'Fin 2025 - début 2026'
    },
    {
      id: 1,
      titre: 'Script de vérification mot de passe BIOS',
      description: 'Outil d\'automatisation PowerShell pour auditer la sécurité des BIOS d\'un parc informatique de plusieurs centaines de postes. Stockage des rapports en base de données SQL.<br>Projet réalisé en stage pour la DSIA de KOESIO AURA.',
      technos: ['PowerShell', 'SQL Server', 'MySQL', 'GLPI'],
      imageUrl: 'images/projets/imgScriptMdpBios.webp',
      annee: 'juin 2025'
    }
  ];
}
