<template>
  <h2>Inline Web Worker</h2>
  <el-button type="primary" @click="send">Click to ping worker</el-button>
  <p class="worker-response">{{ pong }}</p>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const pong = ref('')

    return {
      pong,
      send() {
        window.vm.$$worker.send('ping').then((res: any) => {
          pong.value += res.data
        })
      }
    }
  }
}
</script>
