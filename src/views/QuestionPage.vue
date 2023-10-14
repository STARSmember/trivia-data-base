<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import useAPI from '@/composables/useAPI'

import BaseTitle from '@/components/BaseTitle.vue'

const route = useRoute()

const categoryID = route.params.id

const api = useAPI()
const question = ref(null)
watch(
  () => route.paramsid,
  async () => {
    question.value = await api.getQuestion(categoryID)
  },
)
</script>

<template>
  <BaseTitle> I'm Question Page for {{ categoryID }}</BaseTitle>
  <pre>{{ question }}</pre>
</template>
