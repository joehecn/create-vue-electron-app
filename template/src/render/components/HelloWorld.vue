<template>
  <h1>{{ msg }}</h1>
  <!-- <button @click="count++">count is: {{ count }}</button> -->
  <el-button type="primary" @click="count++">count is: {{ count }}</el-button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <p class="test">test scss</p>
</template>

<script lang="ts">
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.test {
  font-size: 48px;
  color: red;
}
</style>
