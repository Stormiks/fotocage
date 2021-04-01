import AuthMiddleware from './middleware/auth'
import GuesMiddleware from './middleware/guest'

const DefaultLayout = () => import('views/layouts/DefaultLayout/DefaultLayout')
const AuthLayout = () => import('views/layouts/AuthLayout/AuthLayout')
const ErrorLayout = () => import('views/layouts/ErrorLayout/ErrorLayout')

// component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),

export const defaultRoute = {
  path: '/',
  component: DefaultLayout,
  children: [
    {
      path: '',
      name: 'Home',
      alias: '/gallery',
      redirect: {
        name: 'Gallery'
      },
      component: () => import('views/Home')
    },
    {
      path: 'upload',
      name: 'Upload',
      component: () => import('views/UploadImages/'),
      meta: {
        title: 'Upload',
        middleware: {
          attach: [AuthMiddleware]
        },
        permissions: [
          {
            role: 'photographer',
            access: true
          },
          {
            role: 'admin',
            access: true
          }
        ]
        // role: ['auth']
      }
    },
    {
      path: 'gallery',
      name: 'Gallery',
      component: () => import('views/GalleryImages/'),
      meta: {
        title: 'Gallery',
        middleware: {
          attach: [AuthMiddleware]
        },
        permissions: [
          {
            role: 'photographer',
            access: true
          },
          {
            role: 'admin',
            access: true
          },
          {
            role: 'guest',
            access: false
          }
        ]
        // role: ['guest']
      }
    },
    {
      path: 'about',
      name: 'About',
      component: () => import('@/views/About'),
      meta: {
        title: 'About',
        middleware: {
          attach: [AuthMiddleware]
        },
        permissions: [
          {
            role: 'photographer',
            access: true
          },
          {
            role: 'admin',
            access: true
          }
        ]
        // role: ['auth']
      }
    }
  ]
}

export const authRoute = {
  path: '/auth',
  name: 'Auth',
  component: AuthLayout,
  redirect: { name: 'Login' },
  children: [
    {
      path: 'registration',
      name: 'Registration',
      component: () => import('views/Registration/'),
      meta: {
        title: 'Registration',
        middleware: {
          attach: [GuesMiddleware],
          ignore: [AuthMiddleware]
        },
      }
    },
    {
      path: 'login',
      name: 'Login',
      component: () => import('views/Login/'),
      meta: {
        title: 'Login',
        middleware: {
          attach: [GuesMiddleware],
          ignore: [AuthMiddleware]
        },
      }
    }
  ]
}

export const errorRoute = {
  path: '/*',
  component: ErrorLayout,
  redirect: { name: 'Error-Not-Found' },
  middleware: {
    ignore: [AuthMiddleware],
  },
  children: [
    {
      path: 'page-not-found',
      name: 'Error-Not-Found',
      component: () => import('views/Errors/ErrorNotFound.vue')
    }
  ]
}

export const routes = [
  defaultRoute,
  authRoute,
  errorRoute
]
