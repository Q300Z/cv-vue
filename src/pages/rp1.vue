<script lang="ts" setup>
import {useTitle} from "@vueuse/core";

useTitle('Rapport de stage 1')
</script>

<template>
  <v-container>
    <!-- Section "L'entreprise" -->
    <v-row>
      <v-col cols="12">
        <v-card class="mb-3">
          <v-img
            class="align-end align-self-center"
            cover
            src="https://globaluserfiles.com/media/161_560047e12896c1df58b0df99df32c5b4d9f80c2b.svg"
            width="50%"
          >

          </v-img>
          <v-card-title>L'entreprise</v-card-title>
          <v-card-text>
            <p><b>Dates du stage :</b> Du 23/05/2023 au 21/07/2023</p>
            <p>La raison sociale de l'entreprise est Flazio. Elle est une société de technologie spécialisée dans le
              développement de logiciels et de services en ligne. Flazio a été fondée en 2012 et est basée à Milan, en
              Italie. Depuis sa création, l'entreprise s'est concentrée sur la création d'outils faciles à utiliser pour
              la création de sites web professionnels. Elle vise à fournir des solutions accessibles et conviviales pour
              permettre à quiconque de construire son propre site web sans avoir de connaissances techniques
              approfondies. Flazio est une entreprise en pleine croissance qui compte une équipe diversifiée et
              talentueuse.</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card class="mb-3">
          <v-card-title>Service d’affectation</v-card-title>
          <v-card-text>
            <p>Je suis rattaché au service marketing de Flazio, où je suis chargé de la traduction du site web et des
              vidéos de l'entreprise. Mon rôle consiste à assurer la localisation des contenus dans différentes langues
              afin d'élargir la portée de Flazio à un public international. Je travaille en étroite collaboration avec
              l'équipe marketing pour garantir que les messages et les informations de l'entreprise sont correctement
              adaptés aux différents marchés et cultures.</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card class="mb-3">
          <v-card-title>Ses activités</v-card-title>
          <v-card-text>
            <p>Les activités de Flazio comprennent le développement de logiciels, la conception de sites web, la
              fourniture de services d'hébergement et la gestion de plateformes en ligne pour la création de sites
              web.</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card class="mb-3">
          <v-card-title>Ses clients</v-card-title>
          <v-card-text>
            <p>Flazio compte une base de clients diversifiée, allant des petites entreprises et des entrepreneurs
              individuels aux organisations plus importantes. Ses clients proviennent de différents secteurs d'activité,
              tels que le commerce de détail, la restauration, les services professionnels, l'e-commerce, et bien
              d'autres.</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card class="mb-3">

          <v-card-title>Environnement technologique de l’entreprise</v-card-title>
          <v-card-text>
              <v-list>
                <li class="ma-2"><b>Matériel :</b> Flazio utilise des ordinateurs de bureau et des serveurs pour ses opérations internes et pour
                  héberger les sites web de ses clients.</li>
                <li class="ma-2"><b>Outils et logiciels :</b> L'entreprise utilise une combinaison d'outils de développement logiciel, tels que
                  des environnements de développement intégrés (IDE) comme Visual Studio Code, des systèmes de contrôle de
                  version comme Git, des outils de gestion de projets tels que Jira, et d'autres logiciels spécifiques au
                  développement web.</li>
                <li class="ma-2"><b>Langages :</b> Flazio utilise plusieurs langages de programmation pour le développement de ses produits,
                  notamment HTML, CSS, JavaScript, PHP, et MySQL pour la gestion des bases de données.</li>
                <li class="ma-2"><b>Architecture :</b> L'architecture des applications développées par Flazio repose sur une approche orientée
                  objet et suit les principes de conception de logiciel modulaire pour permettre une maintenance et une
                  évolutivité efficaces.</li>
                <li class="ma-2"><b>Serveurs :</b> Flazio utilise des serveurs dédiés et des services d'hébergement cloud pour héberger les
                  sites web de ses clients, assurant ainsi une disponibilité et des performances optimales.</li>
              </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Section "Organisation du projet" -->
    <v-row>
      <v-col cols="12">
        <v-card class="mb-3">
          <v-card-title>Organisation du projet (Semaine 2)</v-card-title>
          <v-card-text>
            <p><b>Mode de Transmission du travail à faire (Outils, réunions, … etc) :</b></p>
            <p>Au cours de la deuxième semaine de mon stage chez Flazio, le mode de transmission du travail à faire
              s'est principalement effectué à l'oral. J'ai eu des réunions régulières avec mon responsable pour discuter
              des tâches assignées. Ces réunions nous ont permis de clarifier les attentes et de partager des
              informations importantes.</p>
            <p><b>Outils de suivi utilisés :</b></p>
            <p>Pour le suivi de mes tâches et des modifications apportées aux fichiers, nous avons utilisé GitHub. Cet
              outil de gestion de versions nous a permis de collaborer de manière efficace et de garder une trace des
              changements effectués. J'ai créé un référentiel dédié à mes tâches. Cela a facilité le travail
              d'équipe.</p>
            <p><b>Outils de gestion de projets utilisés :</b></p>
            <p>Pour la gestion du projet, nous avons également utilisé GitHub. Nous avons créé des tickets pour chaque
              tâche à effectuer, en précisant les détails et les exigences spécifiques. Ces tickets nous ont permis de
              suivre l'avancement des tâches assigné à chacun, d'assigner d’autres tâches et de collaborer de manière
              organisée. J'ai pu mettre à jour l'état des tickets au fur et à mesure de l'avancement du projet.</p>
            <p><b>Autres outils liés à l'organisation du projet :</b></p>
            <p>Pendant la deuxième semaine, nous n'avons pas utilisé d'autres outils spécifiques liés à l'organisation
              du projet. Cependant, notre responsable a partagé des documents et des ressources supplémentaires via
              Google Drive, ce qui nous a permis d'accéder facilement aux informations nécessaires au projet.</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Section "Description du projet ou des missions" -->
    <v-row>
      <v-col cols="12">
        <v-card class="mb-3">
          <v-card-title>Description du projet ou des missions (Semaine 3)</v-card-title>
          <v-card-text>
            <p><b>Création d'un tableau de gestion des bénéfices, des dépenses et des bilans</b></p>
            <p><b>Description détaillée de chaque mission :</b></p>
            <p><b>Besoins, raisons et objectifs :</b></p>
            <p>L'objectif de cette mission est de créer un tableau de gestion des bénéfices, des dépenses et des bilans
              pour l'année à venir. L'entreprise souhaite disposer d'un outil interactif qui permettra de visualiser et
              d'analyser ces données financières de manière claire et efficace. L'utilisation d'Ag Grid, une
              bibliothèque JavaScript pour la création de grilles de données, a été choisie pour sa flexibilité et ses
              fonctionnalités avancées.</p>
            <p><b>Environnement technologique du projet ou de la mission :</b></p>
            <p>L'environnement technologique du projet se compose des éléments suivants :</p>
            <p>- SQL : La base de données sera utilisée pour stocker les données financières, y compris les bénéfices,
              les dépenses et les bilans. <br>
              - PHP : Le langage PHP sera utilisé pour manipuler les données de la base de données et les préparer à
              être affichées dans le tableau. <br>
              - JavaScript/HTML/CSS : Ces langages seront utilisés pour créer l'interface utilisateur du tableau et
              gérer l'affichage et l'interaction des données. <br>
              - Ag Grid : Cette bibliothèque JavaScript sera utilisée pour créer la grille de données interactive et
              ajouter des fonctionnalités avancées telles que le tri, le filtrage, la pagination, etc.</p>
            <p><b>Description du travail réalisé avec preuves (copies d'écran) :</b></p>
            <p>Notre mission consiste à développer un tableau interactif en utilisant Ag Grid, une bibliothèque
              JavaScript spécialisée dans la création de grilles de données. Ce tableau aura pour objectif d'afficher
              les bénéfices, les dépenses, les bilans et les prévisions pour l'année à venir. Pour ce faire, nous
              recevrons les bases de données de l'entreprise, que nous manipulons à l'aide de PHP, puis l’affichent à
              l'aide de JavaScript.</p>
            <p>Cette tâche s'inscrit dans une architecture 3 tiers, où nous aurons : <br>
              La couche de stockage avec une base de données SQL <br>
              La couche back-end avec PHP pour traiter les données <br>
              La couche front-end avec JavaScript, HTML et CSS pour l'interface utilisateur.</p>
            <p>Grâce à Ag Grid, nous allons créer trois "tableaux" qui affichent les dépenses, les revenus et les bilans
              en fonction du temps. Nous ajouterons différentes fonctionnalités pour permettre une visualisation
              flexible des données, telles que la possibilité de les afficher mois par mois ou année par année, de
              choisir l'affichage en pourcentage ou en euros, et de représenter graphiquement les taux d'évolution des
              revenus au fil du temps. De plus, nous pourrons ajouter des prévisions basées sur les taux
              d'accroissement, ainsi que des schémas cycliques qui reflètent les variations des revenus au cours des
              différentes périodes de l'année.</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Section "Conclusion" -->
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Conclusion (Dernière semaine)</v-card-title>
          <v-card-text>
            <p>Durant cette dernière semaine de mon stage chez Flazio, j'ai poursuivi le travail sur la construction de
              la base de données et du système d'authentification. Bien que le projet ne soit pas encore terminé, j'ai
              pu réaliser des progrès significatifs et approfondir mes connaissances dans ces domaines clés.</p>
            <p>Concernant la base de données, j'ai collaboré avec l'équipe technique pour concevoir et mettre en place
              la structure de la base de données. Nous avons utilisé MySQL comme système de gestion de base de données
              et avons défini la structure des tables.</p>
            <p>En ce qui concerne le système d'authentification, j'ai travaillé en collaboration avec Bilel et Hugo pour
              mettre en place un mécanisme sécurisé permettant aux utilisateurs d'accéder au système. Nous avons utilisé
              des algorithmes de hachage pour garantir la confidentialité et l'intégrité des informations
              d'identification.</p>
            <p>Au cours de cette semaine, j'ai également continué à utiliser les outils de suivi et de gestion de
              projets mentionnés précédemment. On a participé à des réunions régulières avec notre responsable pour
              discuter des problèmes éventuels et des prochaines étapes.</p>
            <p>Dans l'ensemble, cette expérience de stage chez Flazio m'a permis d'acquérir des compétences précieuses
              dans le domaine du développement de bases de données et des systèmes d'authentification.</p>
            <p>Je suis reconnaissant envers l'entreprise Flazio de m'avoir offert cette opportunité de stage
              enrichissante. Ce stage m'a permis d'appliquer mes connaissances théoriques à des projets concrets et de
              développer mes compétences techniques et professionnelles. Je suis confiant que les résultats de ce projet
              contribueront positivement aux objectifs de l'entreprise.</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="sass" scoped>

</style>
