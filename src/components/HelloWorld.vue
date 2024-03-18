<template>
  <v-container>
    <v-responsive
      class="align-center fill-height mx-auto"
      max-width="900"
    >
      <v-img
        class="mb-4"
        height="150"
        src="@/assets/logo.png"
      />

      <div class="text-center">
        <div class="text-body-2 font-weight-light mb-n1">Bienvenue sur mon</div>

        <h1 class="text-h2 font-weight-bold">{{ appStore.getSiteName }}</h1>
      </div>

      <div class="py-4"/>

      <v-row>
        <v-col v-for="item in appStore.getSitePages.filter(page => page.path !== '/')" :key="item.path">
          <v-card
            :prepend-icon="item.icon"
            :subtitle="item.subtitle"
            :title="item.title"
            :to="item.path"
            class="py-4"
            color="surface-variant"
            min-width="300"
            rounded="lg"
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
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import {useAppStore} from "../stores/app";

const appStore = useAppStore()
</script>
