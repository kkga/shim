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
  ProgressBarDemo: {
    Main: dynamic(() => import("@/demos/progressbar").then((mod) => mod.Main)),
    Indeterminate: dynamic(() =>
      import("@/demos/progressbar").then((mod) => mod.Indeterminate),
    ),
  },

  ButtonDemo: {
    Main: dynamic(() => import("@/demos/button").then((mod) => mod.Main)),
    Variant: dynamic(() => import("@/demos/button").then((mod) => mod.Variant)),
    Size: dynamic(() => import("@/demos/button").then((mod) => mod.Size)),
    Intent: dynamic(() => import("@/demos/button").then((mod) => mod.Intent)),
    Content: dynamic(() => import("@/demos/button").then((mod) => mod.Content)),
  },
  ToggleButtonDemo: {
    Main: dynamic(() => import("@/demos/togglebutton").then((mod) => mod.Main)),
    Controlled: dynamic(() =>
      import("@/demos/togglebutton").then((mod) => mod.Controlled),
    ),
    States: dynamic(() =>
      import("@/demos/togglebutton").then((mod) => mod.States),
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
    Context: dynamic(() => import("@/demos/field").then((mod) => mod.Context)),
  },
  CheckboxDemo: {
    Main: dynamic(() => import("@/demos/checkbox").then((mod) => mod.Main)),
    Group: dynamic(() => import("@/demos/checkbox").then((mod) => mod.Group)),
    States: dynamic(() => import("@/demos/checkbox").then((mod) => mod.States)),
  },
  NumberFieldDemo: {
    Main: dynamic(() => import("@/demos/numberfield").then((mod) => mod.Main)),
    States: dynamic(() =>
      import("@/demos/numberfield").then((mod) => mod.States),
    ),
    Size: dynamic(() => import("@/demos/numberfield").then((mod) => mod.Size)),
    Variant: dynamic(() =>
      import("@/demos/numberfield").then((mod) => mod.Variant),
    ),
    LabelPosition: dynamic(() =>
      import("@/demos/numberfield").then((mod) => mod.LabelPosition),
    ),
  },
  RadioGroupDemo: {
    Main: dynamic(() => import("@/demos/radiogroup").then((mod) => mod.Main)),
    Orientation: dynamic(() =>
      import("@/demos/radiogroup").then((mod) => mod.Orientation),
    ),
    LabelPosition: dynamic(() =>
      import("@/demos/radiogroup").then((mod) => mod.LabelPosition),
    ),
    Size: dynamic(() => import("@/demos/radiogroup").then((mod) => mod.Size)),
    Variant: dynamic(() =>
      import("@/demos/radiogroup").then((mod) => mod.Variant),
    ),
    RadioDescription: dynamic(() =>
      import("@/demos/radiogroup").then((mod) => mod.RadioDescription),
    ),
  },
  SearchFieldDemo: {
    Main: dynamic(() => import("@/demos/searchfield").then((mod) => mod.Main)),
    Controlled: dynamic(() =>
      import("@/demos/searchfield").then((mod) => mod.Controlled),
    ),
    Size: dynamic(() => import("@/demos/searchfield").then((mod) => mod.Size)),
    Variant: dynamic(() =>
      import("@/demos/searchfield").then((mod) => mod.Variant),
    ),
    States: dynamic(() =>
      import("@/demos/searchfield").then((mod) => mod.States),
    ),
    PrefixIcon: dynamic(() =>
      import("@/demos/searchfield").then((mod) => mod.PrefixIcon),
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
    Orientation: dynamic(() =>
      import("@/demos/slider").then((mod) => mod.Orientation),
    ),
    LabelPosition: dynamic(() =>
      import("@/demos/slider").then((mod) => mod.LabelPosition),
    ),
    Variant: dynamic(() => import("@/demos/slider").then((mod) => mod.Variant)),
    Size: dynamic(() => import("@/demos/slider").then((mod) => mod.Size)),
  },
  SwitchDemo: {
    Main: dynamic(() => import("@/demos/switch").then((mod) => mod.Main)),
    Controlled: dynamic(() =>
      import("@/demos/switch").then((mod) => mod.Controlled),
    ),
    States: dynamic(() => import("@/demos/switch").then((mod) => mod.States)),
    Variant: dynamic(() => import("@/demos/switch").then((mod) => mod.Variant)),
    Size: dynamic(() => import("@/demos/switch").then((mod) => mod.Size)),
  },
  TextFieldDemo: {
    Main: dynamic(() => import("@/demos/textfield").then((mod) => mod.Main)),
    LabelPosition: dynamic(() =>
      import("@/demos/textfield").then((mod) => mod.LabelPosition),
    ),
    Size: dynamic(() => import("@/demos/textfield").then((mod) => mod.Size)),
    Variant: dynamic(() =>
      import("@/demos/textfield").then((mod) => mod.Variant),
    ),
  },
  TextAreaDemo: {
    Main: dynamic(() => import("@/demos/textarea").then((mod) => mod.Main)),
    LabelPosition: dynamic(() =>
      import("@/demos/textarea").then((mod) => mod.LabelPosition),
    ),
    Size: dynamic(() => import("@/demos/textarea").then((mod) => mod.Size)),
    Variant: dynamic(() =>
      import("@/demos/textarea").then((mod) => mod.Variant),
    ),
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
    Content: dynamic(() => import("@/demos/table").then((mod) => mod.Content)),
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
