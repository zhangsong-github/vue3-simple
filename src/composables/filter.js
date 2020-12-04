import { ref, computed } from 'vue'

export default function (list){
  const query = ref('')
 
  const filteredList = computed(() => {
    if(!query.value) return list.value
    return list.value.filter(item => item <= query.value)
  })
  
  return {
    query,
    filteredList
  }
  
}