<template>
  <div class="about">
    <form>
      <input type="text" v-model="query">
    </form>
    <ul>
      <li v-for="item in filteredList" :key="item">{{item}}</li>
    </ul>
  </div>
</template>
<script>
  import { toRefs } from 'vue'
  import useGetList from '../composables/getList.js'
  import useFilter from '../composables/filter.js'
  export default {
    name: 'About',
    props: {
      user: {
        type: String,
        default: 'jason'
      }
    },
    setup(props) {
      
      // INIT LIST DATA & UPDATE      
      const { user } = toRefs(props)
      const { list, getList } = useGetList(user)
      
      // FILTER FUNC
      const { query, filteredList } = useFilter(list)

      return {
        list,
        getList,
        query,
        filteredList
      }
      
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>