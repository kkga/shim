import dynamic from 'next/dynamic'

export const getMainDemo = (name) => {
  return dynamic(() => import(`@/demos/${name}`).then((mod) => mod.Main))
}

export const demoComponents = {
  BadgeDemo: {
    Main: dynamic(() => import('@/demos/badge').then((mod) => mod.Main)),
    Size: dynamic(() => import('@/demos/badge').then((mod) => mod.Size)),
    Intent: dynamic(() => import('@/demos/badge').then((mod) => mod.Intent)),
    Icons: dynamic(() => import('@/demos/badge').then((mod) => mod.Icons)),
  },
  MeterDemo: {
    Main: dynamic(() => import('@/demos/meter').then((mod) => mod.Main)),
    Custom: dynamic(() => import('@/demos/meter').then((mod) => mod.Custom)),
    Color: dynamic(() => import('@/demos/meter').then((mod) => mod.Color)),
  },

  ButtonDemo: {
    Main: dynamic(() => import('@/demos/button').then((mod) => mod.Main)),
    Variant: dynamic(() => import('@/demos/button').then((mod) => mod.Variant)),
    Size: dynamic(() => import('@/demos/button').then((mod) => mod.Size)),
    Intent: dynamic(() => import('@/demos/button').then((mod) => mod.Intent)),
    Icons: dynamic(() => import('@/demos/button').then((mod) => mod.Icons)),
    IconOnly: dynamic(() =>
      import('@/demos/button').then((mod) => mod.IconOnly),
    ),
  },
  ToggleButtonDemo: {
    Main: dynamic(() =>
      import('@/demos/toggle-button').then((mod) => mod.Main),
    ),
    Controlled: dynamic(() =>
      import('@/demos/toggle-button').then((mod) => mod.Controlled),
    ),
    States: dynamic(() =>
      import('@/demos/toggle-button').then((mod) => mod.States),
    ),
  },

  FieldDemo: {
    Main: dynamic(() => import('@/demos/field').then((mod) => mod.Main)),
  },
  CheckboxDemo: {
    Main: dynamic(() => import('@/demos/checkbox').then((mod) => mod.Main)),
    Group: dynamic(() => import('@/demos/checkbox').then((mod) => mod.Group)),
    States: dynamic(() => import('@/demos/checkbox').then((mod) => mod.States)),
  },
  NumberFieldDemo: {
    Main: dynamic(() => import('@/demos/number-field').then((mod) => mod.Main)),
    States: dynamic(() =>
      import('@/demos/number-field').then((mod) => mod.States),
    ),
    Size: dynamic(() => import('@/demos/number-field').then((mod) => mod.Size)),
  },
  RadioGroupDemo: {
    Main: dynamic(() => import('@/demos/radio').then((mod) => mod.Main)),
    Orientation: dynamic(() =>
      import('@/demos/radio').then((mod) => mod.Orientation),
    ),
  },
  SearchFieldDemo: {
    Main: dynamic(() => import('@/demos/search-field').then((mod) => mod.Main)),
    Controlled: dynamic(() =>
      import('@/demos/search-field').then((mod) => mod.Controlled),
    ),
    Size: dynamic(() => import('@/demos/search-field').then((mod) => mod.Size)),
    States: dynamic(() =>
      import('@/demos/search-field').then((mod) => mod.States),
    ),
    PrefixIcon: dynamic(() =>
      import('@/demos/search-field').then((mod) => mod.PrefixIcon),
    ),
  },
  SliderDemo: {
    Main: dynamic(() => import('@/demos/slider').then((mod) => mod.Main)),
    Filled: dynamic(() => import('@/demos/slider').then((mod) => mod.Filled)),
    Controlled: dynamic(() =>
      import('@/demos/slider').then((mod) => mod.Controlled),
    ),
    ControlledRange: dynamic(() =>
      import('@/demos/slider').then((mod) => mod.ControlledRange),
    ),
    States: dynamic(() => import('@/demos/slider').then((mod) => mod.States)),
    Orientation: dynamic(() =>
      import('@/demos/slider').then((mod) => mod.Orientation),
    ),
  },
  SwitchDemo: {
    Main: dynamic(() => import('@/demos/switch').then((mod) => mod.Main)),
    Controlled: dynamic(() =>
      import('@/demos/switch').then((mod) => mod.Controlled),
    ),
    States: dynamic(() => import('@/demos/switch').then((mod) => mod.States)),
  },
  TextFieldDemo: {
    Main: dynamic(() => import('@/demos/text-field').then((mod) => mod.Main)),
  },

  TabsDemo: {
    Main: dynamic(() => import('@/demos/tabs').then((mod) => mod.Main)),
    Controlled: dynamic(() =>
      import('@/demos/tabs').then((mod) => mod.Controlled),
    ),
  },

  PopoverDemo: {
    Main: dynamic(() => import('@/demos/popover').then((mod) => mod.Main)),
    Placement: dynamic(() =>
      import('@/demos/popover').then((mod) => mod.Placement),
    ),
  },
}
