<template>
  <v-footer app height="30">
    <a
      v-for="item in items"
      :key="item.title"
      :href="item.href"
      :title="item.title"
      class="d-inline-block mx-2 social-link"
      rel="noopener noreferrer"
      target="_blank"
    >
      <v-icon
        :icon="item.icon"
        :size="item.icon === '$vuetify' ? 24 : 16"
      />
    </a>
    <a
      class="d-inline-block mx-2 social-link"
      href="#"
      rel="noopener noreferrer"
      title="Toggle theme"
      @click="toggleTheme"
    >
      <v-icon :icon="theme.global.current.value.dark  ? 'mdi-weather-sunny' : 'mdi-weather-night'" size="16"/>
    </a>
    <div
      class="text-caption text-disabled"
      style="position: absolute; right: 16px;"
    >
      &copy; 2024-{{ (new Date()).getFullYear() }} <span class="d-none d-sm-inline-block">Thomas Boutin</span>
      —
      <a
        class="text-decoration-none on-surface"
        href="https://raw.githubusercontent.com/Q300Z/cv-vue/main/LICENSE"
        rel="noopener noreferrer"
        target="_blank"
      >
        MIT License
      </a>
    </div>
  </v-footer>
</template>

<script lang="ts" setup>
const items = [
  {
    title: 'GitHub',
    icon: `mdi-github`,
    href: 'https://github.com/Q300Z',
  }
]

import {useTheme} from 'vuetify'

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<style lang="sass" scoped>
.social-link :deep(.v-icon)
  color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
  text-decoration: none
  transition: .2s ease-in-out

  &:hover
    color: rgba(25, 118, 210, 1)
</style>
