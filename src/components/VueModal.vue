<template>
  <button @click="open"> 点击打开 modal </button>
  <teleport to="body">
    <div v-if="visible" class="modal">
      <p>{{data}}</p>
      <button @click="close"> 点击关闭 modal </button>
    </div>
  </teleport>
</template>

<script>
  import { ref } from 'vue'
  export default {
    emits: {
      open: null,
      close: ({count}) => {
        if (count >= 5) {
          console.log('count', count)
          return true
        } else {
          console.log('count 次数不足!')
          return false
        }
      }
    },
    props: {
      data: Object
    },
    setup(props, { emit }) {
      let visible = ref(false)
      let count = ref(0)
      const open = () => {
        count.value++
        visible.value = true
        emit('open', {count})
      }
      const close = () => {
        count.value++
        visible.value = false
        emit('close', {count})
      }
      return {
        count,
        visible,
        open,
        close
      }
    }
  }
</script>

<style lang="less">
  .modal {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    line-height: 100vh;
    background-color: rgba(0,0,0,.25);
  }
</style>
