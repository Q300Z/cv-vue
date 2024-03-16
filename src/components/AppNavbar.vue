<script lang="ts" setup>
import {ref, watch} from 'vue'
import {useAppStore} from "../stores/app";
import {useRouter} from "vue-router";
import {useTheme} from 'vuetify'

const appStore = useAppStore()

const drawer = ref(true)

const router = useRouter()

const nameCurrentPage = ref(getNameCurrentPage())

function getNameCurrentPage() {
  const page = appStore.getSitePages.find(page => '/' + page.path === router.currentRoute.value.path)
  return page ? page.title : appStore.getSiteName
}

watch(router.currentRoute, () => {
  nameCurrentPage.value = getNameCurrentPage()
})

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <v-app-bar :title="nameCurrentPage" density="compact">
    <template v-slot:prepend>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </template>
    <v-spacer></v-spacer>
    <v-btn icon @click="toggleTheme">
      <v-icon>{{ theme.global.current.value.dark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
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
