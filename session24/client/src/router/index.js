import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path: '/list-post',
    name: 'listProst',
    component:()=> import(/* webPatchChunkName: "listPost" */"@/views/ListPost.vue")
   }
  ]
})

export default router
