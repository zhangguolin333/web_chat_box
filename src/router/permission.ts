import type { Router } from 'vue-router'
// import { useAuthStoreWithout } from '@/store/modules/auth'

export function setupPageGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    // 注释掉或删除验证 session 的逻辑
    // const authStore = useAuthStore()
    // if (!authStore.session) {
    //   try {
    //     await authStore.getSession()
    //   }
    //   catch (err) {
    //     if (to.path !== '/500')
    //       next({ path: '/500' })
    //     return
    //   }
    // }
    
    // 直接放行
    next()
  })
}
