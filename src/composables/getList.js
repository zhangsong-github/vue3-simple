import {
  ref,
  watch,
  onMounted
} from 'vue'

function fetchData(user) {
  return new Promise((resolve, reject) => {
    if (!user) {
      resolve([])
      return
    }
    let data = [1, 2, 3, 4, 5, 6, 7, 8]
    setTimeout(() => {
      resolve(data)
    }, 1500)
  })
}

export default function(user) {
  const list = ref([])
  const getList = async () => {
    list.value = await fetchData(user)
  }
  onMounted(getList)
  watch(user, getList)
  return {
    list,
    getList
  }
}
