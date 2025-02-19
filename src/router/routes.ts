import {
  ViewGridIcon,
  CursorClickIcon,
  DocumentTextIcon,
  StarIcon,
  HomeIcon,
  ViewBoardsIcon,
  BellIcon,
  LocationMarkerIcon,
  UserIcon,
  ColorSwatchIcon,
  CubeIcon,
  CubeTransparentIcon
} from '@heroicons/vue/outline'

import {
  CreditCardIcon,
} from '@heroicons/vue/solid'

const Login = () => import('modules/auth/views/login.vue')
const Register = () => import('modules/auth/views/register.vue')
const ForgotPassword = () => import('modules/auth/views/forgot-password.vue')
const NotFound = () => import('modules/pages/views/404.vue')
const Dashboard = () => import('modules/dashboard/views/index.vue')
const Table = () => import('modules/table/views/index.vue')
const Grid = () => import('modules/grid/views/index.vue')
const Notification = () => import('modules/notification/views/index.vue')
const Button = () => import('modules/buttons/views/index.vue')
const Typography = () => import('modules/typography/views/index.vue')
const Card = () => import('modules/cards/views/index.vue')
const Icons = () => import('modules/icons/views/index.vue')
const Profile = () => import('modules/profile/views/index.vue')
const Map = () => import('modules/map/views/index.vue')
const Pit = () => import('modules/pit/views/index.vue')
const Artifact = () => import('modules/artifact/views/index.vue')

const ComponentLayout = () => import('components/ComponentLayout/index.vue')


const routes = [
  {
    path: '/',
    component: Dashboard,
    name: 'Dashboard',
    meta: {
      title: 'Dashboard',
      icon: HomeIcon,
      color: 'text-indigo-410',
      requiresAuth: true,
      parentPath: 'Home'
    },
  },
  {
    path: '/profile',
    component: Profile,
    name: 'Profile',
    meta: {
      title: 'Profile',
      icon: UserIcon,
      color: 'text-success-50',
      isDarkBackground: true,
      isFullWidthLayout: true,
      requiresAuth: true,
      parentPath: 'Home'
    },
  },
  {
    path: '/register',
    component: Register,
    name: 'register',
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/forgot-password',
    component: ForgotPassword,
    name: 'forgot-password',
    meta: {
      requiresAuth: false,
    },
  },
  {
    
    path: '/login',
    component: Login,
    name: 'login',
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    name: 'NotFound',
    meta: {
      requiresAuth: false,
      parentPath: 'Home',
    },
  },
  {
    path: '/pit',
    component: Pit,
    name: 'Pit',
    meta: {
      title: 'Pit',
      icon: CubeIcon,
      color: 'text-indigo-410',
      requiresAuth: true,
      parentPath: 'Home'
    },
  },
  {
    path: '/artifact',
    component: Artifact,
    name: 'Artifact',
    meta: {
      title: 'Artifact',
      icon: CubeTransparentIcon,
      color: 'text-indigo-410',
      requiresAuth: true,
      parentPath: 'Home'
    },
  },
]

export default routes
