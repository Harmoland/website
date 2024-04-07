<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'

import NotFound from './custom404.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #not-found>
      <NotFound />
    </template>
  </Layout>
</template>
