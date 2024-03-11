<script lang="ts" setup>
import {ref} from 'vue'
import {useAppStore} from "../stores/app";

const appStore = useAppStore()

const drawer = ref(false)
</script>

<template>
  <v-app-bar :elevation="2" density="compact" scroll-behavior="hide" :title="appStore.getSiteName" rounded>
    <template v-slot:prepend>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </template>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    temporary
  >
    <v-list nav>
      <v-list-item
        v-for="item in appStore.getSitePages"
        :key="item.title"
        :prepend-icon="item.icon"
        :subtitle="item.subtitle"
        :title="item.title"
        :to="item.path"
        link
      />
    </v-list>
  </v-navigation-drawer>
</template>

<style lang="sass" scoped>

</style>
