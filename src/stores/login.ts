import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import router from '@/router'

export const useLoginStore = defineStore('login', {
  state: () => {
    return { logged: useStorage('logged', false) }
  },
  actions: {
    change(option: boolean) {
      this.logged = option
      if(option){
        router.push({ path: '/home'})
      }else{
        router.push({ path: '/login'})
      }
    },
  },
})