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
import {useAppStore} from "@/stores/app";

useTitle(useAppStore().getSiteName)

</script>
