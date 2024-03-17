<template>
  <v-app>
    <AppNavbar v-if="router.currentRoute.value.path !== homePage.path"/>
    <v-main scrollable>
      <router-view/>
    </v-main>
    <AppFooter v-if="router.currentRoute.value.path === homePage.path"/>
  </v-app>
</template>

<script lang="ts" setup>
//
import router from "../router";
import {useAppStore} from "../stores/app";
import {ref} from "vue";

const appStore = useAppStore()

const homePage = ref(appStore.getSitePages.find(page => page.path === '/'))
</script>
