import dynamic from 'next/dynamic'

export const demoComponents = {
  BadgeDemo: {
    Main: dynamic(() => import('@/demos/badge').then((mod) => mod.Main)),
    Size: dynamic(() => import('@/demos/badge').then((mod) => mod.Size)),
  },
  CheckboxDemo: {
    Main: dynamic(() => import('@/demos/checkbox').then((mod) => mod.Main)),
    Group: dynamic(() => import('@/demos/checkbox').then((mod) => mod.Group)),
  },
}
