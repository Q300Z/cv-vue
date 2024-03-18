<script lang="ts" setup>
const props = defineProps(['src', 'alt', 'width', 'height'])


</script>

<template>
  <v-dialog absolute max-width="80vw">
    <template v-slot:activator="{ props: activatorProps }">
      <!--      {{ props }}-->
      <v-img
        :alt="props.alt"
        :height="props.height"
        :src="props.src"
        :width="props.width"
        contain
        v-bind="activatorProps"
      />
    </template>

    <template v-slot:default="{ isActive }">
      <v-card :title="props.alt">
        <v-card-item>
          <v-img
            :alt="props.alt"
            :src="props.src"
            max-height="60vh"
            v-bind="isActive"
          />
        </v-card-item>

        <v-card-actions>
          <v-btn
            text="Close"
            @click="isActive.value = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style lang="sass" scoped>

</style>
