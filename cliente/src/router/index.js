
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);

const routes = [
    //la ruta base
    {
        path: '/',
        component:()=> import('../components/framework/LandPage.vue')
    },
    {
        path: '/formulario',
        name: 'formulario',
        component: ()=> import ('../components/framework/Formulario.vue'),
    },
    {
        path: '/paginacion',
        name: 'paginacion',
        component: ()=> import ('../components/framework/Paginacion.vue'),
    },
    {
        path:'*',
        component:()=> import('../components/framework/Error404.vue')
    },
    


]

const router = new VueRouter({ routes, })
export default router;