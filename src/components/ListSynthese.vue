<script lang="ts" setup>
import {useAppStore} from "../stores/app";
import {ref} from "vue";
import {ItemSynthese} from "../models/itemSynthese";

const appStore = useAppStore();
const itemSynthese = ref(appStore.getItemSynthese);

function setItemSynthese(item: ItemSynthese) {
  appStore.CurrentItemSynthese = item;
}
</script>

<template>
  <v-list density="compact" max-height="90vh" nav>
    <v-card v-for="(group, index) in itemSynthese" :key="index" class="mb-2" variant="text">
      <div class="font-weight-bold">{{ group.title }}</div>
      <v-list-item
        v-for="(child, i) in group.children"
        :key="i"
        :title="child.title"
        @click="setItemSynthese(child)"
      />
      <v-divider></v-divider>
    </v-card>
  </v-list>
</template>

<style lang="sass" scoped>

</style>
