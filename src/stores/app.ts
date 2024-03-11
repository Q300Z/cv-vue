// Utilities
import {defineStore} from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    SiteName: 'Site Internet',
    SitePages: [{title: 'Home', path: '/', icon: 'mdi-home'}, {
      title: 'Rapport de stage 1',
      subtitle: 'Accédez au rapport de stage de première année',
      path: 'rp1',
      icon: 'mdi-text-box-outline'
    }, {
      title: 'Rapport de stage 2',
      subtitle: 'Accédez au rapport de stage de seconde année',
      path: 'rp2',
      icon: 'mdi-text-box-outline'
    }],
  }),
  getters: {
    getSiteName: (state) => state.SiteName,
    getSitePages: (state) => state.SitePages,
  },
})
