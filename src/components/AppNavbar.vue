<script lang="ts" setup>
import {ref, watch} from 'vue'
import {useAppStore} from "../stores/app";
import {useRouter} from "vue-router";
import {useTheme} from 'vuetify'

const appStore = useAppStore()

const drawer = ref(false)

const router = useRouter()

const nameCurrentPage = ref(getNameCurrentPage())

function getNameCurrentPage() {
  const page = appStore.getSitePages.find(page => '/' + page.path === router.currentRoute.value.path)
  return page ? page.title : appStore.getSiteName
}

function downloadButton(): string {
  const page = appStore.getSitePages.find(page => '/' + page.path === router.currentRoute.value.path)
  return page ? page.download : ''
}

watch(router.currentRoute, () => {
  nameCurrentPage.value = getNameCurrentPage()
})

const theme = useTheme()

function toggleTheme() {
  appStore.setThemeSelected(theme.global.current.value.dark ? 'light' : 'dark')
}
</script>

<template>
  <v-app-bar :title="nameCurrentPage" density="compact">
    <template v-slot:prepend>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </template>
    <v-spacer></v-spacer>
    <v-btn v-if="downloadButton" :href="downloadButton()" icon text="Attestation de stage"
           title="Attestation de stage">
      <v-icon>mdi-download</v-icon>
    </v-btn>
    <v-btn icon text="Changer le theme" title="Changer le theme" @click="toggleTheme">
      <v-icon>{{ theme.global.current.value.dark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
    </v-btn>
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
        :subtitle="item.subtitle || ''"
        :title="item.title"
        :to="item.path"
        link
      />
    </v-list>
  </v-navigation-drawer>
</template>

<style lang="sass" scoped>

</style>
