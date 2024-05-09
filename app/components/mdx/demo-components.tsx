import dynamic from "next/dynamic"

export const getMainDemo = (name) => {
  return dynamic(() => import(`@/demos/${name}`).then((mod) => mod.Main))
}

export const demoComponents = {
  BadgeDemo: {
    Main: dynamic(() => import("@/demos/badge").then((mod) => mod.Main)),
    Size: dynamic(() => import("@/demos/badge").then((mod) => mod.Size)),
    Intent: dynamic(() => import("@/demos/badge").then((mod) => mod.Intent)),
    Content: dynamic(() => import("@/demos/badge").then((mod) => mod.Content)),
  },
  MeterDemo: {
    Main: dynamic(() => import("@/demos/meter").then((mod) => mod.Main)),
    Custom: dynamic(() => import("@/demos/meter").then((mod) => mod.Custom)),
    Color: dynamic(() => import("@/demos/meter").then((mod) => mod.Color)),
  },

  ButtonDemo: {
    Main: dynamic(() => import("@/demos/button").then((mod) => mod.Main)),
    Variant: dynamic(() => import("@/demos/button").then((mod) => mod.Variant)),
    Size: dynamic(() => import("@/demos/button").then((mod) => mod.Size)),
    Intent: dynamic(() => import("@/demos/button").then((mod) => mod.Intent)),
    Content: dynamic(() => import("@/demos/button").then((mod) => mod.Content)),
  },
  ToggleButtonDemo: {
    Main: dynamic(() =>
      import("@/demos/toggle-button").then((mod) => mod.Main),
    ),
    Controlled: dynamic(() =>
      import("@/demos/toggle-button").then((mod) => mod.Controlled),
    ),
    States: dynamic(() =>
      import("@/demos/toggle-button").then((mod) => mod.States),
    ),
  },

  FormDemo: {
    Main: dynamic(() => import("@/demos/form").then((mod) => mod.Main)),
    Validation: dynamic(() =>
      import("@/demos/form").then((mod) => mod.Validation),
    ),
  },
  FieldDemo: {
    Main: dynamic(() => import("@/demos/field").then((mod) => mod.Main)),
  },
  CheckboxDemo: {
    Main: dynamic(() => import("@/demos/checkbox").then((mod) => mod.Main)),
    Group: dynamic(() => import("@/demos/checkbox").then((mod) => mod.Group)),
    States: dynamic(() => import("@/demos/checkbox").then((mod) => mod.States)),
  },
  NumberFieldDemo: {
    Main: dynamic(() => import("@/demos/number-field").then((mod) => mod.Main)),
    States: dynamic(() =>
      import("@/demos/number-field").then((mod) => mod.States),
    ),
    Size: dynamic(() => import("@/demos/number-field").then((mod) => mod.Size)),
  },
  RadioGroupDemo: {
    Main: dynamic(() => import("@/demos/radio").then((mod) => mod.Main)),
    Orientation: dynamic(() =>
      import("@/demos/radio").then((mod) => mod.Orientation),
    ),
  },
  SearchFieldDemo: {
    Main: dynamic(() => import("@/demos/search-field").then((mod) => mod.Main)),
    Controlled: dynamic(() =>
      import("@/demos/search-field").then((mod) => mod.Controlled),
    ),
    Size: dynamic(() => import("@/demos/search-field").then((mod) => mod.Size)),
    States: dynamic(() =>
      import("@/demos/search-field").then((mod) => mod.States),
    ),
    PrefixIcon: dynamic(() =>
      import("@/demos/search-field").then((mod) => mod.PrefixIcon),
    ),
  },
  SliderDemo: {
    Main: dynamic(() => import("@/demos/slider").then((mod) => mod.Main)),
    Filled: dynamic(() => import("@/demos/slider").then((mod) => mod.Filled)),
    Controlled: dynamic(() =>
      import("@/demos/slider").then((mod) => mod.Controlled),
    ),
    ControlledRange: dynamic(() =>
      import("@/demos/slider").then((mod) => mod.ControlledRange),
    ),
    States: dynamic(() => import("@/demos/slider").then((mod) => mod.States)),
    Orientation: dynamic(() =>
      import("@/demos/slider").then((mod) => mod.Orientation),
    ),
  },
  SwitchDemo: {
    Main: dynamic(() => import("@/demos/switch").then((mod) => mod.Main)),
    Controlled: dynamic(() =>
      import("@/demos/switch").then((mod) => mod.Controlled),
    ),
    States: dynamic(() => import("@/demos/switch").then((mod) => mod.States)),
  },
  TextFieldDemo: {
    Main: dynamic(() => import("@/demos/text-field").then((mod) => mod.Main)),
  },

  TabsDemo: {
    Main: dynamic(() => import("@/demos/tabs").then((mod) => mod.Main)),
    Controlled: dynamic(() =>
      import("@/demos/tabs").then((mod) => mod.Controlled),
    ),
  },
  LinkDemo: {
    Main: dynamic(() => import("@/demos/link").then((mod) => mod.Main)),
    Intent: dynamic(() => import("@/demos/link").then((mod) => mod.Intent)),
  },

  PopoverDemo: {
    Main: dynamic(() => import("@/demos/popover").then((mod) => mod.Main)),
    Placement: dynamic(() =>
      import("@/demos/popover").then((mod) => mod.Placement),
    ),
  },
  TooltipDemo: {
    Main: dynamic(() => import("@/demos/tooltip").then((mod) => mod.Main)),
    Placement: dynamic(() =>
      import("@/demos/tooltip").then((mod) => mod.Placement),
    ),
  },
  DialogDemo: {
    Main: dynamic(() => import("@/demos/dialog").then((mod) => mod.Main)),
    Controlled: dynamic(() =>
      import("@/demos/dialog").then((mod) => mod.Controlled),
    ),
    Close: dynamic(() => import("@/demos/dialog").then((mod) => mod.Close)),
  },

  ListBoxDemo: {
    Main: dynamic(() => import("@/demos/listbox").then((mod) => mod.Main)),
    Sections: dynamic(() =>
      import("@/demos/listbox").then((mod) => mod.Sections),
    ),
    Content: dynamic(() =>
      import("@/demos/listbox").then((mod) => mod.Content),
    ),
  },
  MenuDemo: {
    Main: dynamic(() => import("@/demos/menu").then((mod) => mod.Main)),
    Content: dynamic(() => import("@/demos/menu").then((mod) => mod.Content)),
    Selection: dynamic(() =>
      import("@/demos/menu").then((mod) => mod.Selection),
    ),
    Sections: dynamic(() => import("@/demos/menu").then((mod) => mod.Sections)),
    Submenu: dynamic(() => import("@/demos/menu").then((mod) => mod.Submenu)),
  },
  TableDemo: {
    Main: dynamic(() => import("@/demos/table").then((mod) => mod.Main)),
    Sorting: dynamic(() => import("@/demos/table").then((mod) => mod.Sorting)),
  },
  TagGroupDemo: {
    Main: dynamic(() => import("@/demos/taggroup").then((mod) => mod.Main)),
    Selection: dynamic(() =>
      import("@/demos/taggroup").then((mod) => mod.Selection),
    ),
    Removing: dynamic(() =>
      import("@/demos/taggroup").then((mod) => mod.Removing),
    ),
  },

  SelectDemo: {
    Main: dynamic(() => import("@/demos/select").then((mod) => mod.Main)),
    Controlled: dynamic(() =>
      import("@/demos/select").then((mod) => mod.Controlled),
    ),
    Sections: dynamic(() =>
      import("@/demos/select").then((mod) => mod.Sections),
    ),
    States: dynamic(() => import("@/demos/select").then((mod) => mod.States)),
  },

  ToolbarDemo: {
    Main: dynamic(() => import("@/demos/toolbar").then((mod) => mod.Main)),
    Orientation: dynamic(() =>
      import("@/demos/toolbar").then((mod) => mod.Orientation),
    ),
  },
}
