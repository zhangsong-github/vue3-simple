<template>
  <div class="home">
    <vue-modal @open="open" @close="close"></vue-modal>
  </div>
</template>

<script>
// @ is an alias to /src
import VueModal from '@/components/VueModal.vue'
import { useStore, mapGetters, onMounted} from 'vuex'

export default {
  name: 'Home',
  components: {
    VueModal
  },
  setup(props) {
    const store = useStore()
    store.dispatch('SetUser', { name: 'jason' })
    return {
      store
    }
  },
  mounted() {
    // console.log(this.$store)
  },
  methods: {
    open(value) {
      console.log('opened', value)
    },
    close(value) {
      console.log('closed', value)
    }
  }
}
</script>
