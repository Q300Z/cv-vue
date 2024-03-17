<script lang="ts" setup>
import {useTitle} from "@vueuse/core";

useTitle('Rapport de stage 2')

</script>

<template>
  <v-container>
    <!-- Section "L'entreprise" -->
    <v-row>
      <v-col cols="12">
        <h1 class="mb-2">L'entreprise</h1>
        <v-card class="mb-3">
          <v-img
            cover
            src="/assets/logoOuvrezloeilBanniere.png"
            width="45%"
          >

          </v-img>
          <v-card-title>Contexte</v-card-title>
          <v-card-text>
            <p><b>Dates du stage :</b> Du 15/01/2024 au 23/02/2024</p>
            <p>Au cours de mon stage qui s'est déroulé du 15 janvier 2024 au 23 février 2024 chez Ouvrez L'œil, une
              entreprise spécialisée dans la sécurité, j'ai eu l'opportunité d'explorer le domaine de la sécurité
              informatique au sein de cette Société par Actions Simplifiée (SAS). Fondée en 2002 par M. Vincent RICARD
              expert chevronné en sécurité, Ouvrez L'œil a bâti au fil des années une solide réputation en proposant une
              vaste gamme de produits et services de sécurité. Ces offres incluent des systèmes d'alarme sophistiqués,
              des caméras de surveillance de pointe, des dispositifs d'alarme incendie, entre autres. Mon affectation au
              service informatique m'a permis de découvrir de près les défis et les exigences de ce secteur au sein de
              l'entreprise. Ouvrez L'œil dessert une clientèle diversifiée, allant des particuliers aux professionnels,
              en passant par les administrations. La société étend son influence au-delà de Rouen, couvrant la région
              Normandie et s'étendant même à d'autres régions de la France. Ce rapport de stage vise à mettre en lumière
              mon expérience au sein de cette entreprise dynamique et à explorer les aspects liés à la sécurité
              informatique dans le contexte de ses activités variées.</p>
          </v-card-text>
          <v-card-item>
            <v-row>
              <v-col cols="6">
                <v-card
                  append-icon="mdi-open-in-new"
                  color="surface-variant"
                  href="geo:49.44754,1.03014?z=19"
                  rounded="lg"
                  subtitle="Emplacement d'Ouvrez l'oeil sur OpenStreetMap"
                  title="Localisation Ouvrez l'oeil"
                  variant="text">
                  <v-overlay
                    contained
                    model-value
                    opacity=".06"
                    persistent
                    scrim="primary"
                  />
                  <v-card-item>
                    <iframe height="350"
                            src="https://www.openstreetmap.org/export/embed.html?bbox=1.0287585854530337%2C49.446747380935456%2C1.031521260738373%2C49.44832728385031&amp;layer=mapnik&amp;marker=49.447537338757094%2C1.0301399230957031"
                            style="border: 1px solid black"
                            width="100%"></iframe>
                    <br/><small><a
                    href="https://www.openstreetmap.org/?mlat=49.44754&amp;mlon=1.03014#map=19/49.44754/1.03014">Afficher
                    une carte plus grande en version web</a></small>
                  </v-card-item>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card
                  append-icon="mdi-open-in-new"
                  color="surface-variant"
                  href="https://ouvrezloeil.com"
                  rounded="lg"
                  subtitle="Page officiel d'Ouvrez l'oeil"
                  title="Ouvrez l'oeil"
                  variant="text"
                >
                  <template v-slot:prepend>
                    <img alt="Logo d'Ouvrez l'oeil" height="48" src="/assets/logoOuvrezloeil.jpg" width="48"/>
                  </template>
                  <v-overlay
                    contained
                    model-value
                    opacity=".06"
                    persistent
                    scrim="primary"
                  />
                </v-card>
              </v-col>
            </v-row>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h1 class="mb-2">Le Projet</h1>
        <v-card class="mb-3">
          <v-card-title>La mission</v-card-title>
          <v-card-text>
            <p>La nécessité de créer un nouveau site web pour la gestion client, l'intervention client, et les chantiers
              était dictée par les lacunes de l'existant. Le site actuel présentait des limitations fonctionnelles, des
              problèmes de design surchargé, et l'utilisation d'un framework obsolète qui ne convenait plus aux futures
              fonctionnalités requises.</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card class="mb-3">
          <v-card-title>Le problème de l'existant</v-card-title>
          <v-card-text>
            <p>L'existant présentait des lacunes fonctionnelles notables, notamment en termes de gestion client,
              d'intervention client, et de chantier. Les problèmes de design, avec une esthétique surchargée, ont
              également été identifiés comme des points critiques. De plus, l'utilisation d'un framework obsolète était
              devenue un obstacle majeur pour l'intégration de nouvelles fonctionnalités.</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card class="mb-3">
          <v-card-title>Objectif</v-card-title>
          <v-card-text>
            <p>L'objectif principal du projet était de réaliser une refonte complète du site en utilisant TypeScript
              avec le framework Vue.js. Cette refonte devait non seulement résoudre les lacunes fonctionnelles
              existantes, mais également adopter un design moderne en harmonie avec la direction artistique de
              l'entreprise.</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!--   Section environnement technologique du projet -->

    <v-row>
      <v-col cols="12">
        <h1 class="mb-2">Environnement technologique du projet</h1>
        <v-card class="mb-3">
          <v-card-title>L'utilisation de Vue.js avec Vuetify</v-card-title>
          <v-card-text>
            <p>Pour la partie frontend, le choix s'est porté sur Vue.js combiné avec Vuetify pour bénéficier de
              composants graphiques préconstruits, facilitant ainsi le développement tout en assurant une esthétique
              moderne.</p>
          </v-card-text>
          <v-card-item>
            <v-row>
              <v-col cols="3">
                <v-card
                  append-icon="mdi-open-in-new"
                  color="surface-variant"
                  href="https://fr.vuejs.org"
                  prepend-icon="mdi-vuejs"
                  rounded="lg"
                  subtitle="Site officiel de Vue.js"
                  title="Vue.js"
                  variant="text"
                >
                  <v-overlay
                    contained
                    model-value
                    opacity=".06"
                    persistent
                    scrim="primary"
                  />
                </v-card>
              </v-col>
              <v-col cols="3">
                <v-card
                  append-icon="mdi-open-in-new"
                  color="surface-variant"
                  href="https://vuetifyjs.com/fr/"
                  prepend-icon="mdi-vuetify"
                  rounded="lg"
                  subtitle="Site officiel de Vuetify"
                  title="Vuetify"
                  variant="text"
                >
                  <v-overlay
                    contained
                    model-value
                    opacity=".06"
                    persistent
                    scrim="primary"
                  />
                </v-card>
              </v-col>
            </v-row>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card class="mb-3">
          <v-card-title>Utilisation de Pinia et de Vue Router</v-card-title>
          <v-card-text>
            <p>Pinia a été choisi pour la gestion des états et du stockage local de l'application côté client, offrant
              une solution efficace pour gérer les données de manière optimale.</p>
            <p>La gestion de la navigation au sein de l'application a été confiée à Vue Router, assurant une expérience
              utilisateur fluide et intuitive.</p>
          </v-card-text>
          <v-card-item>
            <v-row>
              <v-col cols="3">
                <v-card
                  append-icon="mdi-open-in-new"
                  color="surface-variant"
                  href="https://pinia.vuejs.org"
                  rounded="lg"
                  subtitle="Site officiel de Pinia"
                  title="Pinia"
                  variant="text"
                >
                  <template v-slot:prepend>
                    <img alt="Pinia" height="24" src="https://pinia.vuejs.org/logo.svg" width="24"/>
                  </template>

                  <v-overlay
                    contained
                    model-value
                    opacity=".06"
                    persistent
                    scrim="primary"
                  />
                </v-card>
              </v-col>
              <v-col cols="3">
                <v-card
                  append-icon="mdi-open-in-new"
                  color="surface-variant"
                  href="https://router.vuejs.org"
                  prepend-icon="mdi-vuejs"
                  rounded="lg"
                  subtitle="Site officiel de Vue Router"
                  title="Vue Router"
                  variant="text"
                >
                  <v-overlay
                    contained
                    model-value
                    opacity=".06"
                    persistent
                    scrim="primary"
                  />
                </v-card>
              </v-col>
            </v-row>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card class="mb-3">
          <v-card-title>Typescript</v-card-title>
          <v-card-text>
            <p>L'ensemble du développement a été réalisé en TypeScript, offrant une meilleure gestion de l'intégrité des
              données grâce à son système de typage.</p>
          </v-card-text>
          <v-card-item>
            <v-row>
              <v-col cols="3">
                <v-card
                  append-icon="mdi-open-in-new"
                  color="surface-variant"
                  href="https://www.typescriptlang.org"
                  prepend-icon="mdi-language-typescript"
                  rounded="lg"
                  subtitle="Site officiel de Typescript"
                  title="Typescript"
                  variant="text"
                >
                  <v-overlay
                    contained
                    model-value
                    opacity=".06"
                    persistent
                    scrim="primary"
                  />
                </v-card>
              </v-col>
            </v-row>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>

    <!-- Section "Description du travail" -->
    <v-row>
      <v-col cols="12">
        <h1 class="mb-2">Description du travail</h1>
        <v-card class="mb-3">
          <v-card-title>Implémentation de l’API</v-card-title>
          <v-card-text>
            <p>Pour faire l’implémentation de l'api de l'entreprise, j'ai du réfléchir à comment rendre l’implémentation
              simple à intégré et facile à maintenir.
              Je me suis donc tourné vers le package npm Axios pour la gestion des requêtes http.</p>
          </v-card-text>
          <v-card-item>
            <v-row>
              <v-col cols="3">
                <v-card
                  append-icon="mdi-open-in-new"
                  color="surface-variant"
                  href="https://www.npmjs.com/package/axios"
                  prepend-icon="mdi-npm"
                  rounded="lg"
                  subtitle="Page NPM de Axios"
                  title="Axios"
                  variant="text"
                >
                  <v-overlay
                    contained
                    model-value
                    opacity=".06"
                    persistent
                    scrim="primary"
                  />
                </v-card>
              </v-col>
            </v-row>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card class="mb-3">
          <v-card-title>Page de connexion</v-card-title>
          <v-card-text>
            <p>Pour la page de connexion, je devais reprendre le design de l'existant et l’adapté à la nouvelle
              technologie.</p>
          </v-card-text>
          <v-card-item>
            <v-row>
              <v-col cols="3">
                <v-img
                  alt="Page de connexion du nouveau site"
                  contain
                  src="/assets/newLoginScreen.png"/>
              </v-col>
              <v-col cols="3">
                <v-img
                  alt="Page de connexion du nouveau site"
                  contain
                  src="/assets/oldLoginScreen.png"/>
              </v-col>
            </v-row>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card class="mb-3">
          <v-card-title>Le composant Liste</v-card-title>
          <v-card-text>
            <p>Pour le composant liste j'ai chercher a se qu'il soit le plus dynamique et simple possible avec des
              fonctionnalités de recherche, d'ajout, de modification et de suppression d'éléments.</p>
          </v-card-text>
          <v-card-item>
            <v-row>
              <v-col cols="3">
                <v-img
                  alt="Composant liste"
                  contain
                  src="/assets/composantListe.png"/>
              </v-col>
            </v-row>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>

    <!--    Conclusion -->
    <v-row>
      <v-col cols="12">
        <h1 class="mb-2">Conclusion</h1>
        <v-card class="mb-3">
          <v-card-title>Conclusion</v-card-title>
          <v-card-text>
            <p>
              Mon stage chez Ouvrez l'oeil a été une expérience exceptionnelle dans le domaine du développement
              web, en particulier dans le contexte de la sécurité informatique. Travailler sur la refonte complète d'un
              site web m'a permis d'acquérir de nouvelles compétences et d'appliquer mes connaissances en technologies
              web modernes telles que Vue.js, Vuetify et TypeScript. Cette expérience m'a également donné l'opportunité
              d'explorer divers aspects de la sécurité informatique, renforçant ainsi ma compréhension des défis et des
              exigences du domaine.</p><br/>
            <p>La méthodologie agile utilisée, combinée à des outils tels que Trello et GitLab, a facilité une
              collaboration efficace au sein de l'équipe. La communication directe a été un atout précieux pour résoudre
              rapidement les défis rencontrés. Je suis fier des réalisations accomplies pendant ce stage, notamment mon
              implication dans l'implémentation de l'API et la création de composants fonctionnels pour le nouveau site.
              Cette expérience a été extrêmement enrichissante, me permettant d'acquérir de nouvelles compétences
              techniques et de développer ma capacité à travailler en équipe. Je suis reconnaissant envers l'entreprise
              et l'équipe pour cette opportunité et je suis confiant que les connaissances et les compétences acquises
              me seront précieuses dans ma future carrière.</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>


  </v-container>
</template>

<style lang="sass" scoped>

</style>
