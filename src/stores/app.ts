// Utilities
import {defineStore} from 'pinia'
import {Page} from "../models/page";
import {useStorage} from "@vueuse/core";
import {ItemGroupSynthese} from "../models/itemSynthese";

export const useAppStore = defineStore('app', {
  state: () => ({
    SiteName: 'Site Internet',
    SitePages: [
      {title: 'Home', path: '/', icon: 'mdi-home'},
      {
        title: 'Tableaux de synthèse',
        subtitle: 'Accédez au tableau de synthèse',
        path: 'ts',
        icon: 'mdi-table',
        download: '/assets/synthese.xlsx'
      },
      {
        title: 'Rapport de stage 1',
        subtitle: 'Accédez au rapport de stage de première année',
        path: 'rp1',
        icon: 'mdi-text-box-outline',
        download: '/assets/attestation2.pdf'
      }, {
        title: 'Rapport de stage 2',
        subtitle: 'Accédez au rapport de stage de seconde année',
        path: 'rp2',
        icon: 'mdi-text-box-outline',
        download: '/assets/attestation2.pdf'
      }] as Page[],
    themeSelected: useStorage('themeSelected', ''),
    ItemSynthese: [{
      title: 'B 1.6 - Organiser son développement professionnel',
      children: [
        {
          title: 'Projet GSK',
          date: '17/10/2022',
          description: 'Réalisation en cours de formation',
          image: []
        }
      ]
    },
      {
        title: 'B 1.4 - Travailler en mode projet',
        children: [
          {
            title: 'Stage de première année',
            date: '23/06/2023 – 21/07/2023',
            description: 'Réalisation en cours de formation',
            image: []
          },
          {
            title: 'Stage de seconde année',
            date: '15/01/2024 – 23/02/2024',
            description: "Durant ma seconde année, j'ai effectué un stage dans l'entreprise Ouvrez l'oeil dans le but de faire un site web de type CRM",
            image: [{src: '/assets/logoOuvrezloeilBanniere.png', alt: 'Ouvrez l\'oeil'}]
          },
          {
            title: 'Projets de fin d’année',
            date: '12/03/24',
            description: 'Réalisation en cours de formation',
            image: []
          }
        ]
      },
      {
        title: 'B 1.3 - Développer la présence en ligne de l’organisation',
        children: [
          {
            title: 'Mise en ligne du Portfolio',
            date: '23/01/2023 – 30/01/2023',
            description: 'Réalisation en cours de formation',
            image: []
          },
          {
            title: 'LinkedIn',
            date: '10/01/23',
            description: 'Réalisation en cours de formation',
            image: []
          }
        ]
      },
      {
        title: 'B 1.1 - Gérer le patrimoine informatique',
        children: [
          {
            title: 'W3C (html/css)',
            date: '16/11/2022 – 23/11/2022',
            description: 'Réalisation en cours de formation',
            image: []
          },
          {
            title: 'RGPD',
            date: '18/10/2022 – 20/04/2023',
            description: 'Réalisation en cours de formation',
            image: []
          },
          {
            title: 'CMS',
            date: '27/01/23',
            description: 'Réalisation en cours de formation',
            image: []
          }
        ]
      },
      {
        title: 'B 1.2 - Répondre aux incidents et aux demandes d’assistance et d’évolution',
        children: [
          {
            title: 'Traduction FR',
            date: '23/06/2023 – 21/07/2023',
            description: 'Réalisations en milieu professionnel en cours de première année',
            image: []
          }
        ]
      },
      {
        title: 'B 1.5 - Mettre à disposition des utilisateurs un service informatique',
        children: [
          {
            title: 'Création d’un application de triage de site internet',
            date: '23/06/2023 – 21/07/2023',
            description: 'Réalisations en milieu professionnel en cours de première année',
            image: []
          },
          {
            title: 'Création d’un site internet CRM',
            date: '23/06/2023 – 21/07/2023',
            description: 'Réalisations en milieu professionnel en cours de première année',
            image: []
          }
        ]
      }] as ItemGroupSynthese[],
  }),
  getters: {
    getSiteName: (state) => state.SiteName,
    getSitePages: (state) => state.SitePages,
    getThemeSelected: (state) => state.themeSelected,
    getItemSynthese: (state) => state.ItemSynthese,
  },
  actions: {
    setThemeSelected(theme: string) {
      this.themeSelected = theme;
    }
  }
})
