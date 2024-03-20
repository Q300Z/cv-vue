<script lang="ts" setup>
import {useTitle} from "@vueuse/core";
import {ItemSynthese} from "@/models/itemSynthese";
import {computed, ComputedRef, onUnmounted} from "vue";
import {useAppStore} from "@/stores/app";

useTitle('Tableaux de synthèse')

const appStore = useAppStore()

const selected: ComputedRef<ItemSynthese> = computed(() => appStore.getCurrentItemSynthese)

onUnmounted(() => {
  appStore.CurrentItemSynthese = {} as ItemSynthese
})
</script>

<template>
  <!--Tableau de synthèse-->
  <v-container>
    <!--    <v-code>{{ selected }}</v-code>-->
    <v-card v-if="selected.title" variant="text">
      <v-card-title>{{ selected.title }}</v-card-title>
      <v-card-subtitle>Date : {{ selected.date }}</v-card-subtitle>
      <v-card-text>
        <p>Description : {{ selected.description }}</p>
        <p v-if="selected.link">Liens : <a :href="selected.link">{{ selected.link }}</a></p>
      </v-card-text>
      <v-row v-if="selected.image.length > 0">
        <v-col v-for="image in selected.image" :key="image.alt">
          <ImageZoom :alt="image.alt" :src="image.src" height="300" width="100%"/>
        </v-col>
      </v-row>
    </v-card>

    <v-empty-state
      v-else
      headline="Whoops, 404"
      image="@/assets/logo.png"
      text="Veuillez sélectionner un élément dans le tableau de synthèse pour afficher les détails."
      title="Pas de détails à afficher."
    ></v-empty-state>
  </v-container>
</template>

<style lang="sass" scoped>

</style>
