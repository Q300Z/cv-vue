// Utilities
import {defineStore} from 'pinia'
import {Page} from "../models/page";
import {useStorage} from "@vueuse/core";

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
  }),
  getters: {
    getSiteName: (state) => state.SiteName,
    getSitePages: (state) => state.SitePages,
    getThemeSelected: (state) => state.themeSelected,
  },
  actions: {
    setThemeSelected(theme: string) {
      this.themeSelected = theme;
    }
  }
})
