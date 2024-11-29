import { describe, it, expect,test } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'

import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('HomeView', () => { 
    it('Probando la existencia del componente o vista HomeView ', async () => { 
        //definimos rutas
        const router = createRouter({ 
            history: createWebHistory(), 
            routes: [{ 
                path: '/', 
                name: 'HomeView', 
                component: HomeView 
            }], 
        }) 
  
        //navegamos a la ruta
        router.push('/') 
        await router.isReady() 
  
        const wrapper = mount(HomeView, { 
            global: { 
                plugins: [router] 
            } 
        }) 
        expect(wrapper.findComponent(HomeView).text()).toMatch('Clinica Digital')
    })   
  })