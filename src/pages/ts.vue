<script lang="ts" setup>
import { useTitle } from "@vueuse/core";
import { ItemSynthese } from "../models/itemSynthese";
import { ref } from "vue";

useTitle('Tableaux de synthèse')

const selected = ref<ItemSynthese | null>(null)

function selectedTrigger(item: ItemSynthese) {
  // console.log(item)
  selected.value = item
}
</script>

<template>
  <!--Tableau de synthèse-->
  <v-row>
    <v-col cols="3">
      <ListSynthese @selected="selectedTrigger" />
    </v-col>
    <v-col v-if="selected">
      <v-container>
        <!-- <v-code>{{ selected }}</v-code> -->
        <v-card variant="text">
          <v-card-title>{{ selected.title }}</v-card-title>
          <v-card-subtitle>Date : {{ selected.date }}</v-card-subtitle>
          <v-card-text>
            <p>Description : {{ selected.description }}</p>
            <p v-if="selected.link">Liens : <a :href="selected.link">{{ selected.link }}</a></p>
          </v-card-text>
          <v-row v-if="selected.image.length > 0">
            <v-col v-for="image in selected.image" :key="image.alt">
              <ImageZoom :alt="image.alt" :src="image.src" height="300" width="100%" />
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-col>
  </v-row>
</template>

<style lang="sass" scoped>

</style>
