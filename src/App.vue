<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
//
import {useTitle} from "@vueuse/core";
import {useTheme} from "vuetify";
import {onMounted, watch} from "vue";
import {useAppStore} from "./stores/app";

useTitle(useAppStore().getSiteName)

const theme = useTheme()
const appStore = useAppStore()

watch(
  () => appStore.getThemeSelected,
  (newValue) => {
    theme.global.name.value = newValue === 'dark' ? 'dark' : 'light';
  }
);

onMounted(() => {
  theme.global.name.value = appStore.getThemeSelected === 'dark' ? 'dark' : 'light';
})
</script>
