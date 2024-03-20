/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */
// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
// Composables
import { createVuetify } from 'vuetify';
import { fr } from "vuetify/locale";
import { md3 } from "vuetify/blueprints";
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
    locale: {
        locale: 'fr',
        fallback: 'en',
        messages: { fr },
    },
    blueprint: md3,
    theme: {
        defaultTheme: 'light',
    },
});
