import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accueil',
  imports: [RouterLink],
  templateUrl: './accueil.html',
  styleUrl: './accueil.css',
  standalone: true,
})
export class Accueil {
  etudes = [
    {
      titre: '[2026 - 2027] Je suis à la recherche d\'une alternance pour une L3 informatique.',
      description: 'La 3e année de licence informatique est composé de 9 modules de formation donnant lieu à évaluation en fin de module : <ul><li>Mathématiques</li><li>Principes fondamentaux des systèmes d’exploitation</li><li>Paradigmes de programmation</li><li>Systèmes d’information et base de données</li><li>Introduction à la cybersécurité de l’internet</li><li>Management de projet</li><li>Application réparties</li><li>Systèmes de gestion de base de données</li><li>Anglais</li></ul> Ainsi qu\'un module optionnel au choix, donnant lieu à évaluation en fin de module :<ul><li>Génie logiciel</li><li>Technologies pour les applications en réseau</li></ul><br><b>Si mon profil vous intéresse, n\'hésitez pas à me <a href="/contact">contacter</a> !</b>',
      ouvert: false
    },
    {
      titre: '[2024 - 2026] BTS SIO option SLAM',
      description: 'Le BTS SIO (Services Informatiques aux Organisations) option SLAM (Solutions Logicielles et Applications Métiers) permet d\'acquérir des compétences en informatique : <ul><li><b>Développement web et applicatif :</b> Conception, codage et maintenance de solutions logicielles.</li><li><b>Bases de données :</b> Modélisation, création et exploitation de bases de données structurées.</li><li><b>Cybersécurité :</b> Sécurisation des développements et des infrastructures.</li><li><b>Gestion de services :</b> Support et administration des services informatiques.</li></ul>',
      ouvert: false
    },
    {
      titre: '[2021 - 2024] Baccalauréat général',
      description: "J'ai obtenu mon baccalauréat général en 2024 avec les spécialités :<ul><li>Mathématiques</li><li>NSI</li></ul>",
      ouvert: false
    },
    {
      titre: '[2017 - 2021] Brevet des collèges',
      description: "J'ai obtenu mon brevet des collèges avec mention très bien en 2021.",
      ouvert: false
    }
  ];

  competences = [
    {
      titre: 'Développement web',
      description: ['HTML/CSS', 'JavaScript/TypeScript', 'PHP', 'Frameworks : Angular, Laravel'],
      flipped: false
    },
    {
      titre: 'Développement d\'application',
      description: ['Java', 'C#', 'Kotlin', 'Programmation orientée objet'],
      flipped: false
    },
    {
      titre: 'Base de données',
      description: ['SQL', 'MySQL', 'PostgreSQL'],
      flipped: false
    },
    {
      titre: 'Conception',
      description: ['Maquettage', 'Diagrammes des cas d\'utilisation', 'Diagrammes de classes (UML)'],
      flipped: false
    },
    {
      titre: 'Versionning',
      description: ['Git', 'GitHub'],
      flipped: false
    },
    {
      titre: 'Base de réseaux',
      description: ['Gestion de parc (GLPI)', 'Windows Server', 'AD', 'DHCP', 'PFSENSE', 'Packet tracer'],
      flipped: false
    },
    {
      titre: 'Autres compétences techniques',
      description: ['Windows', 'Linux', 'Python', 'Vulgarisation'],
      flipped: false
    },
    {
      titre: 'Compétences non techniques',
      description: ['Français (langue maternelle)', 'Anglais (B1)', 'Communication'],
      flipped: false
    }
  ];

  toggleEtude(etude: any) {
    etude.ouvert = !etude.ouvert;
  }

  toggleCompetence(competence: any) {
    competence.flipped = !competence.flipped;
  }
}
