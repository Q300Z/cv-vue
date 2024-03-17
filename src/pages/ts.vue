<script lang="ts" setup>
import {useTitle} from "@vueuse/core";
import {ItemSynthese} from "../models/itemSynthese";
import {ref} from "vue";

useTitle('Tableaux de synthèse')

const selected = ref<ItemSynthese | null>(null)

function selectedTrigger(item: ItemSynthese) {
  console.log(item)
  selected.value = item
}
</script>

<template>
  <!--Tableau de synthèse-->
  <v-row>
    <v-col cols="3">
      <ListSynthese @selected="selectedTrigger"/>
    </v-col>
    <v-col v-if="selected" cols="6">
      <v-container>
        <v-code>{{ selected }}</v-code>
        <v-card variant="text">
          <v-img v-for="image in selected.image" v-if="selected.image.length > 0" :key="image.alt" :alt="image.alt"
                 :src="image.src"
                 height="300"
                 width="100%"
          />
          <v-card-title>{{ selected.title }}</v-card-title>
          <v-card-subtitle>{{ selected.date }}</v-card-subtitle>
          <v-card-text>{{ selected.description }}</v-card-text>
        </v-card>
      </v-container>
    </v-col>
  </v-row>
</template>

<style lang="sass" scoped>

</style>
