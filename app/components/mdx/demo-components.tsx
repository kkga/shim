import dynamic from 'next/dynamic'

export const demoComponents = {
  BadgeDemo: {
    Main: dynamic(() => import('@/demos/badge').then((mod) => mod.Main)),
    Size: dynamic(() => import('@/demos/badge').then((mod) => mod.Size)),
  },
  CheckboxDemo: {
    Main: dynamic(() => import('@/demos/checkbox').then((mod) => mod.Main)),
    Group: dynamic(() => import('@/demos/checkbox').then((mod) => mod.Group)),
    States: dynamic(() => import('@/demos/checkbox').then((mod) => mod.States)),
  },
  ButtonDemo: {
    Main: dynamic(() => import('@/demos/button').then((mod) => mod.Main)),
    Variant: dynamic(() => import('@/demos/button').then((mod) => mod.Variant)),
    Size: dynamic(() => import('@/demos/button').then((mod) => mod.Size)),
    Intent: dynamic(() => import('@/demos/button').then((mod) => mod.Intent)),
  },
}
