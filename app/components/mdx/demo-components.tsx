import dynamic from 'next/dynamic'

export const demoComponents = {
  BadgeDemo: {
    Main: dynamic(() => import('@/demos/badge').then((mod) => mod.Main)),
    Size: dynamic(() => import('@/demos/badge').then((mod) => mod.Size)),
    Intent: dynamic(() => import('@/demos/badge').then((mod) => mod.Intent)),
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
  IconButtonDemo: {
    Main: dynamic(() => import('@/demos/icon-button').then((mod) => mod.Main)),
    Intent: dynamic(() =>
      import('@/demos/icon-button').then((mod) => mod.Intent)
    ),
    Variant: dynamic(() =>
      import('@/demos/icon-button').then((mod) => mod.Variant)
    ),
    Size: dynamic(() => import('@/demos/icon-button').then((mod) => mod.Size)),
  },
  MeterDemo: {
    Main: dynamic(() => import('@/demos/meter').then((mod) => mod.Main)),
    Custom: dynamic(() => import('@/demos/meter').then((mod) => mod.Custom)),
    Color: dynamic(() => import('@/demos/meter').then((mod) => mod.Color)),
  },
}
