<script lang="ts" setup>
import {ref, watch} from 'vue'
import {useAppStore} from "../stores/app";
import {useRouter} from "vue-router";
import {useTheme} from 'vuetify'

const appStore = useAppStore()

const drawer = ref(false)
const ts_drawer = ref(true)

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
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"/>
    </template>
    <v-spacer></v-spacer>
    <v-btn v-if="downloadButton" :href="downloadButton()" icon="mdi-download" text="Attestation de stage"
           title="Attestation de stage"/>
    <v-btn :icon="theme.global.current.value.dark ? 'mdi-weather-sunny' : 'mdi-weather-night'" text="Changer le theme"
           title="Changer le theme" @click="toggleTheme"/>
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


  <v-navigation-drawer
    v-if="router.currentRoute.value.path === '/ts'"
    v-model="ts_drawer"
    width="350"
  >
    <ListSynthese/>
  </v-navigation-drawer>

  <v-fab
    v-if="router.currentRoute.value.path === '/ts'"
    :icon="ts_drawer?'mdi-menu-open':'mdi-menu-close'"
    location="bottom left"
    appear
    app
    @click="ts_drawer = !ts_drawer"
  ></v-fab>

</template>

<style lang="sass" scoped>

</style>
