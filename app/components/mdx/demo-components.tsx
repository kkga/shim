import { ProgressBar } from "@ui/ProgressBar"
import dynamic from "next/dynamic"
import { ComponentType } from "react"

export function getMainDemo(name: string) {
  return dynamic(() => import(`docs/${name}/index`).then((mod) => mod.Main), {
    loading: () => (
      <div className="flex flex-1 self-stretch">
        <ProgressBar
          isIndeterminate
          aria-label="Demo loader"
          className="m-auto w-32"
        />
      </div>
    ),
  })
}

interface DemoComponent {
  Main: ComponentType<object>
  [key: string]: ComponentType<object>
}

export const demoComponents: Record<string, DemoComponent> = {
  // Status
  BadgeDemo: {
    Main: dynamic(() => import("@docs/Badge").then((mod) => mod.Main)),
    Size: dynamic(() => import("@docs/Badge").then((mod) => mod.Size)),
    Intent: dynamic(() => import("@docs/Badge").then((mod) => mod.Intent)),
    Content: dynamic(() => import("@docs/Badge").then((mod) => mod.Content)),
  },
  MeterDemo: {
    Main: dynamic(() => import("@docs/Meter").then((mod) => mod.Main)),
    Custom: dynamic(() => import("@docs/Meter").then((mod) => mod.Custom)),
    Color: dynamic(() => import("@docs/Meter").then((mod) => mod.Color)),
  },
  ProgressBarDemo: {
    Main: dynamic(() => import("@docs/ProgressBar").then((mod) => mod.Main)),
    Indeterminate: dynamic(() =>
      import("@docs/ProgressBar").then((mod) => mod.Indeterminate),
    ),
  },
  ProgressCircleDemo: {
    Main: dynamic(() => import("@docs/ProgressCircle").then((mod) => mod.Main)),
    Indeterminate: dynamic(() =>
      import("@docs/ProgressCircle").then((mod) => mod.Indeterminate),
    ),
    Size: dynamic(() => import("@docs/ProgressCircle").then((mod) => mod.Size)),
  },

  // Buttons
  ButtonDemo: {
    Main: dynamic(() => import("@docs/Button").then((mod) => mod.Main)),
    Variant: dynamic(() => import("@docs/Button").then((mod) => mod.Variant)),
    Size: dynamic(() => import("@docs/Button").then((mod) => mod.Size)),
    Intent: dynamic(() => import("@docs/Button").then((mod) => mod.Intent)),
    Content: dynamic(() => import("@docs/Button").then((mod) => mod.Content)),
    Pending: dynamic(() => import("@docs/Button").then((mod) => mod.Pending)),
  },
  ToggleButtonDemo: {
    Main: dynamic(() => import("@docs/ToggleButton").then((mod) => mod.Main)),
    Controlled: dynamic(() =>
      import("@docs/ToggleButton").then((mod) => mod.Controlled),
    ),
    States: dynamic(() =>
      import("@docs/ToggleButton").then((mod) => mod.States),
    ),
    Size: dynamic(() => import("@docs/ToggleButton").then((mod) => mod.Size)),
    Intent: dynamic(() =>
      import("@docs/ToggleButton").then((mod) => mod.Intent),
    ),
  },
  ToggleButtonGroupDemo: {
    Main: dynamic(() =>
      import("@docs/ToggleButtonGroup").then((mod) => mod.Main),
    ),
    States: dynamic(() =>
      import("@docs/ToggleButtonGroup").then((mod) => mod.States),
    ),
    Size: dynamic(() =>
      import("@docs/ToggleButtonGroup").then((mod) => mod.Size),
    ),
  },

  // Forms
  FormDemo: {
    Main: dynamic(() => import("@docs/Form").then((mod) => mod.Main)),
    Validation: dynamic(() =>
      import("@docs/Form").then((mod) => mod.Validation),
    ),
  },
  FieldDemo: {
    Main: dynamic(() => import("@docs/Field").then((mod) => mod.Main)),
    ThemeSize: dynamic(() =>
      import("@docs/Field").then((mod) => mod.ThemeSize),
    ),
    ThemeVariant: dynamic(() =>
      import("@docs/Field").then((mod) => mod.ThemeVariant),
    ),
    ThemeLabelPosition: dynamic(() =>
      import("@docs/Field").then((mod) => mod.ThemeLabelPosition),
    ),
  },
  CheckboxDemo: {
    Main: dynamic(() => import("@docs/Checkbox").then((mod) => mod.Main)),
    Group: dynamic(() => import("@docs/Checkbox").then((mod) => mod.Group)),
    States: dynamic(() => import("@docs/Checkbox").then((mod) => mod.States)),
    Size: dynamic(() => import("@docs/Checkbox").then((mod) => mod.Size)),
    Variant: dynamic(() => import("@docs/Checkbox").then((mod) => mod.Variant)),
    Description: dynamic(() =>
      import("@docs/Checkbox").then((mod) => mod.CheckboxDescription),
    ),
  },
  NumberFieldDemo: {
    Main: dynamic(() => import("@docs/NumberField").then((mod) => mod.Main)),
    States: dynamic(() =>
      import("@docs/NumberField").then((mod) => mod.States),
    ),
    Size: dynamic(() => import("@docs/NumberField").then((mod) => mod.Size)),
    Variant: dynamic(() =>
      import("@docs/NumberField").then((mod) => mod.Variant),
    ),
    LabelPosition: dynamic(() =>
      import("@docs/NumberField").then((mod) => mod.LabelPosition),
    ),
  },
  RadioGroupDemo: {
    Main: dynamic(() => import("@docs/RadioGroup").then((mod) => mod.Main)),
    Orientation: dynamic(() =>
      import("@docs/RadioGroup").then((mod) => mod.Orientation),
    ),
    LabelPosition: dynamic(() =>
      import("@docs/RadioGroup").then((mod) => mod.LabelPosition),
    ),
    Size: dynamic(() => import("@docs/RadioGroup").then((mod) => mod.Size)),
    Variant: dynamic(() =>
      import("@docs/RadioGroup").then((mod) => mod.Variant),
    ),
    RadioDescription: dynamic(() =>
      import("@docs/RadioGroup").then((mod) => mod.RadioDescription),
    ),
  },
  SearchFieldDemo: {
    Main: dynamic(() => import("@docs/SearchField").then((mod) => mod.Main)),
    Controlled: dynamic(() =>
      import("@docs/SearchField").then((mod) => mod.Controlled),
    ),
    Size: dynamic(() => import("@docs/SearchField").then((mod) => mod.Size)),
    Variant: dynamic(() =>
      import("@docs/SearchField").then((mod) => mod.Variant),
    ),
    States: dynamic(() =>
      import("@docs/SearchField").then((mod) => mod.States),
    ),
    PrefixIcon: dynamic(() =>
      import("@docs/SearchField").then((mod) => mod.PrefixIcon),
    ),
  },
  SliderDemo: {
    Main: dynamic(() => import("@docs/Slider").then((mod) => mod.Main)),
    Filled: dynamic(() => import("@docs/Slider").then((mod) => mod.Filled)),
    Controlled: dynamic(() =>
      import("@docs/Slider").then((mod) => mod.Controlled),
    ),
    ControlledRange: dynamic(() =>
      import("@docs/Slider").then((mod) => mod.ControlledRange),
    ),
    Orientation: dynamic(() =>
      import("@docs/Slider").then((mod) => mod.Orientation),
    ),
    LabelPosition: dynamic(() =>
      import("@docs/Slider").then((mod) => mod.LabelPosition),
    ),
    Variant: dynamic(() => import("@docs/Slider").then((mod) => mod.Variant)),
    Size: dynamic(() => import("@docs/Slider").then((mod) => mod.Size)),
  },
  SwitchDemo: {
    Main: dynamic(() => import("@docs/Switch").then((mod) => mod.Main)),
    Controlled: dynamic(() =>
      import("@docs/Switch").then((mod) => mod.Controlled),
    ),
    States: dynamic(() => import("@docs/Switch").then((mod) => mod.States)),
    Variant: dynamic(() => import("@docs/Switch").then((mod) => mod.Variant)),
    Size: dynamic(() => import("@docs/Switch").then((mod) => mod.Size)),
    LabelPosition: dynamic(() =>
      import("@docs/Switch").then((mod) => mod.LabelPosition),
    ),
  },
  TextFieldDemo: {
    Main: dynamic(() => import("@docs/TextField").then((mod) => mod.Main)),
    LabelPosition: dynamic(() =>
      import("@docs/TextField").then((mod) => mod.LabelPosition),
    ),
    Size: dynamic(() => import("@docs/TextField").then((mod) => mod.Size)),
    Variant: dynamic(() =>
      import("@docs/TextField").then((mod) => mod.Variant),
    ),
  },
  TextAreaDemo: {
    Main: dynamic(() => import("@docs/TextArea").then((mod) => mod.Main)),
    LabelPosition: dynamic(() =>
      import("@docs/TextArea").then((mod) => mod.LabelPosition),
    ),
    Size: dynamic(() => import("@docs/TextArea").then((mod) => mod.Size)),
    Variant: dynamic(() => import("@docs/TextArea").then((mod) => mod.Variant)),
  },

  // Navigation
  TabsDemo: {
    Main: dynamic(() => import("@docs/Tabs").then((mod) => mod.Main)),
    Variant: dynamic(() => import("@docs/Tabs").then((mod) => mod.Variant)),
    Size: dynamic(() => import("@docs/Tabs").then((mod) => mod.Size)),
    Orientation: dynamic(() =>
      import("@docs/Tabs").then((mod) => mod.Orientation),
    ),
    Controlled: dynamic(() =>
      import("@docs/Tabs").then((mod) => mod.Controlled),
    ),
    Dynamic: dynamic(() => import("@docs/Tabs").then((mod) => mod.Dynamic)),
  },
  LinkDemo: {
    Main: dynamic(() => import("@docs/Link").then((mod) => mod.Main)),
    Intent: dynamic(() => import("@docs/Link").then((mod) => mod.Intent)),
  },
  BreadcrumbsDemo: {
    Main: dynamic(() => import("@docs/Breadcrumbs").then((mod) => mod.Main)),
  },
  DisclosureDemo: {
    Main: dynamic(() => import("@docs/Disclosure").then((mod) => mod.Main)),
    Size: dynamic(() => import("@docs/Disclosure").then((mod) => mod.Size)),
  },
  DisclosureGroupDemo: {
    Main: dynamic(() =>
      import("@docs/DisclosureGroup").then((mod) => mod.Main),
    ),
    Size: dynamic(() =>
      import("@docs/DisclosureGroup").then((mod) => mod.Size),
    ),
  },

  // Overlays
  PopoverDemo: {
    Main: dynamic(() => import("@docs/Popover").then((mod) => mod.Main)),
    Placement: dynamic(() =>
      import("@docs/Popover").then((mod) => mod.Placement),
    ),
  },
  TooltipDemo: {
    Main: dynamic(() => import("@docs/Tooltip").then((mod) => mod.Main)),
    Placement: dynamic(() =>
      import("@docs/Tooltip").then((mod) => mod.Placement),
    ),
  },
  DialogDemo: {
    Main: dynamic(() => import("@docs/Dialog").then((mod) => mod.Main)),
    Controlled: dynamic(() =>
      import("@docs/Dialog").then((mod) => mod.Controlled),
    ),
    Close: dynamic(() => import("@docs/Dialog").then((mod) => mod.Close)),
  },

  // Collections
  ListBoxDemo: {
    Main: dynamic(() => import("@docs/ListBox").then((mod) => mod.Main)),
    Sections: dynamic(() =>
      import("@docs/ListBox").then((mod) => mod.Sections),
    ),
    Size: dynamic(() => import("@docs/ListBox").then((mod) => mod.Size)),
    Content: dynamic(() => import("@docs/ListBox").then((mod) => mod.Content)),
  },
  MenuDemo: {
    Main: dynamic(() => import("@docs/Menu").then((mod) => mod.Main)),
    Content: dynamic(() => import("@docs/Menu").then((mod) => mod.Content)),
    Selection: dynamic(() => import("@docs/Menu").then((mod) => mod.Selection)),
    Sections: dynamic(() => import("@docs/Menu").then((mod) => mod.Sections)),
    Submenu: dynamic(() => import("@docs/Menu").then((mod) => mod.Submenu)),
    Size: dynamic(() => import("@docs/Menu").then((mod) => mod.Size)),
  },
  TableDemo: {
    Main: dynamic(() => import("@docs/Table").then((mod) => mod.Main)),
    Sorting: dynamic(() => import("@docs/Table").then((mod) => mod.Sorting)),
    Content: dynamic(() => import("@docs/Table").then((mod) => mod.Content)),
    Resizable: dynamic(() =>
      import("@docs/Table").then((mod) => mod.Resizable),
    ),
  },
  TagGroupDemo: {
    Main: dynamic(() => import("@docs/TagGroup").then((mod) => mod.Main)),
    Selection: dynamic(() =>
      import("@docs/TagGroup").then((mod) => mod.Selection),
    ),
    Removing: dynamic(() =>
      import("@docs/TagGroup").then((mod) => mod.Removing),
    ),
    Color: dynamic(() => import("@docs/TagGroup").then((mod) => mod.Color)),
  },

  // Pickers
  SelectDemo: {
    Main: dynamic(() => import("@docs/Select").then((mod) => mod.Main)),
    Controlled: dynamic(() =>
      import("@docs/Select").then((mod) => mod.Controlled),
    ),
    Sections: dynamic(() => import("@docs/Select").then((mod) => mod.Sections)),
    States: dynamic(() => import("@docs/Select").then((mod) => mod.States)),
    Size: dynamic(() => import("@docs/Select").then((mod) => mod.Size)),
    Links: dynamic(() => import("@docs/Select").then((mod) => mod.Links)),
  },
  ComboBoxDemo: {
    Main: dynamic(() => import("@docs/ComboBox").then((mod) => mod.Main)),
    Size: dynamic(() => import("@docs/ComboBox").then((mod) => mod.Size)),
    Content: dynamic(() => import("@docs/ComboBox").then((mod) => mod.Content)),
  },

  // Content
  AvatarDemo: {
    Main: dynamic(() => import("@docs/Avatar").then((mod) => mod.Main)),
    Size: dynamic(() => import("@docs/Avatar").then((mod) => mod.Size)),
    Radius: dynamic(() => import("@docs/Avatar").then((mod) => mod.Radius)),
  },
  ToolbarDemo: {
    Main: dynamic(() => import("@docs/Toolbar").then((mod) => mod.Main)),
    Orientation: dynamic(() =>
      import("@docs/Toolbar").then((mod) => mod.Orientation),
    ),
  },
  KbdDemo: {
    Main: dynamic(() => import("@docs/Kbd").then((mod) => mod.Main)),
    Variant: dynamic(() => import("@docs/Kbd").then((mod) => mod.Variant)),
    Size: dynamic(() => import("@docs/Kbd").then((mod) => mod.Size)),
  },
  DataListDemo: {
    Main: dynamic(() => import("@docs/DataList").then((mod) => mod.Main)),
    LabelPosition: dynamic(() =>
      import("@docs/DataList").then((mod) => mod.LabelPosition),
    ),
    Size: dynamic(() => import("@docs/DataList").then((mod) => mod.Size)),
  },
}
