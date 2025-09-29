/** biome-ignore-all lint/style/useNamingConvention: demo component names */

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import { ProgressBar } from "@/components/progress-bar";

export function getMainDemo(name: string) {
  return dynamic(() => import(`@/docs/${name}/main`), {
    loading: () => (
      <div className="flex flex-1 self-stretch">
        <ProgressBar
          aria-label="Loading demo"
          className="w-32"
          isIndeterminate
        />
      </div>
    ),
  });
}

export function getDemos(name: string) {
  return dynamic(() => import(`@/docs/${name}/index`));
}

interface DemoComponent {
  Main: ComponentType<object>;
  [key: string]: ComponentType<object>;
}

export const demoComponents: Record<string, DemoComponent> = {
  // Status
  BadgeDemo: {
    Main: dynamic(() => import("@docs/Badge/main")),
    Size: dynamic(() => import("@docs/Badge/size")),
    Intent: dynamic(() => import("@docs/Badge/intent")),
    Content: dynamic(() => import("@docs/Badge/content")),
  },
  MeterDemo: {
    Main: dynamic(() => import("@docs/Meter/main")),
    Custom: dynamic(() => import("@docs/Meter/custom")),
    Color: dynamic(() => import("@docs/Meter/color")),
  },
  ProgressBarDemo: {
    Main: dynamic(() => import("@docs/ProgressBar/main")),
    Indeterminate: dynamic(() => import("@docs/ProgressBar/indeterminate")),
  },
  ProgressCircleDemo: {
    Main: dynamic(() => import("@docs/ProgressCircle/main")),
    Indeterminate: dynamic(() => import("@docs/ProgressCircle/indeterminate")),
    Size: dynamic(() => import("@docs/ProgressCircle/size")),
  },

  // Buttons
  ButtonDemo: {
    Main: dynamic(() => import("@docs/Button/main")),
    Variant: dynamic(() => import("@docs/Button/variant")),
    Size: dynamic(() => import("@docs/Button/size")),
    Intent: dynamic(() => import("@docs/Button/intent")),
    Content: dynamic(() => import("@docs/Button/content")),
    Pending: dynamic(() => import("@docs/Button/pending")),
    Disabled: dynamic(() => import("@docs/Button/disabled")),
  },
  ToggleButtonDemo: {
    Main: dynamic(() => import("@docs/ToggleButton/main")),
    Controlled: dynamic(() => import("@docs/ToggleButton/controlled")),
    States: dynamic(() => import("@docs/ToggleButton/states")),
    Size: dynamic(() => import("@docs/ToggleButton/size")),
    Intent: dynamic(() => import("@docs/ToggleButton/intent")),
    Variant: dynamic(() => import("@docs/ToggleButton/variant")),
  },
  ToggleButtonGroupDemo: {
    Main: dynamic(() => import("@docs/ToggleButtonGroup/main")),
    SelectionMode: dynamic(
      () => import("@docs/ToggleButtonGroup/selection-mode")
    ),
    States: dynamic(() => import("@docs/ToggleButtonGroup/states")),
    Size: dynamic(() => import("@docs/ToggleButtonGroup/size")),
    Variant: dynamic(() => import("@docs/ToggleButtonGroup/variant")),
  },

  // Forms
  FormDemo: {
    Main: dynamic(() => import("@docs/Form/main")),
    Validation: dynamic(() => import("@docs/Form/validation")),
  },
  FieldDemo: {
    Main: dynamic(() => import("@docs/Field/main")),
    ThemeSize: dynamic(() => import("@docs/Field/theme-size")),
    ThemeVariant: dynamic(() => import("@docs/Field/theme-variant")),
    ThemeLabelPosition: dynamic(
      () => import("@docs/Field/theme-label-position")
    ),
  },
  CheckboxDemo: {
    Main: dynamic(() => import("@docs/Checkbox/main")),
    Group: dynamic(() => import("@docs/Checkbox/group")),
    States: dynamic(() => import("@docs/Checkbox/states")),
    Size: dynamic(() => import("@docs/Checkbox/size")),
    Variant: dynamic(() => import("@docs/Checkbox/variant")),
    Description: dynamic(() => import("@docs/Checkbox/checkbox-description")),
  },
  NumberFieldDemo: {
    Main: dynamic(() => import("@docs/NumberField/main")),
    States: dynamic(() => import("@docs/NumberField/states")),
    Size: dynamic(() => import("@docs/NumberField/size")),
    Variant: dynamic(() => import("@docs/NumberField/variant")),
    LabelPosition: dynamic(() => import("@docs/NumberField/label-position")),
  },
  RadioGroupDemo: {
    Main: dynamic(() => import("@docs/RadioGroup/main")),
    Orientation: dynamic(() => import("@docs/RadioGroup/orientation")),
    LabelPosition: dynamic(() => import("@docs/RadioGroup/label-position")),
    Size: dynamic(() => import("@docs/RadioGroup/size")),
    Variant: dynamic(() => import("@docs/RadioGroup/variant")),
    RadioDescription: dynamic(
      () => import("@docs/RadioGroup/radio-description")
    ),
  },
  SearchFieldDemo: {
    Main: dynamic(() => import("@docs/SearchField/main")),
    Controlled: dynamic(() => import("@docs/SearchField/controlled")),
    Size: dynamic(() => import("@docs/SearchField/size")),
    Variant: dynamic(() => import("@docs/SearchField/variant")),
    States: dynamic(() => import("@docs/SearchField/states")),
    PrefixIcon: dynamic(() => import("@docs/SearchField/prefix-icon")),
  },
  SliderDemo: {
    Main: dynamic(() => import("@docs/Slider/main")),
    Filled: dynamic(() => import("@docs/Slider/filled")),
    Controlled: dynamic(() => import("@docs/Slider/controlled")),
    ControlledRange: dynamic(() => import("@docs/Slider/controlled-range")),
    Orientation: dynamic(() => import("@docs/Slider/orientation")),
    LabelPosition: dynamic(() => import("@docs/Slider/label-position")),
    Variant: dynamic(() => import("@docs/Slider/variant")),
    Size: dynamic(() => import("@docs/Slider/size")),
  },
  SwitchDemo: {
    Main: dynamic(() => import("@docs/Switch/main")),
    Controlled: dynamic(() => import("@docs/Switch/controlled")),
    States: dynamic(() => import("@docs/Switch/states")),
    Variant: dynamic(() => import("@docs/Switch/variant")),
    Size: dynamic(() => import("@docs/Switch/size")),
    LabelPosition: dynamic(() => import("@docs/Switch/label-position")),
  },
  TextFieldDemo: {
    Main: dynamic(() => import("@docs/TextField/main")),
    LabelPosition: dynamic(() => import("@docs/TextField/label-position")),
    Size: dynamic(() => import("@docs/TextField/size")),
    Variant: dynamic(() => import("@docs/TextField/variant")),
  },
  TextAreaDemo: {
    Main: dynamic(() => import("@docs/TextArea/main")),
    LabelPosition: dynamic(() => import("@docs/TextArea/label-position")),
    Size: dynamic(() => import("@docs/TextArea/size")),
    Variant: dynamic(() => import("@docs/TextArea/variant")),
  },

  // Navigation
  TabsDemo: {
    Main: dynamic(() => import("@docs/Tabs/main")),
    Variant: dynamic(() => import("@docs/Tabs/variant")),
    Size: dynamic(() => import("@docs/Tabs/size")),
    Orientation: dynamic(() => import("@docs/Tabs/orientation")),
    Controlled: dynamic(() => import("@docs/Tabs/controlled")),
    Dynamic: dynamic(() => import("@docs/Tabs/dynamic")),
  },
  LinkDemo: {
    Main: dynamic(() => import("@docs/Link/main")),
    Intent: dynamic(() => import("@docs/Link/intent")),
  },
  BreadcrumbsDemo: {
    Main: dynamic(() => import("@docs/Breadcrumbs/main")),
  },
  DisclosureDemo: {
    Main: dynamic(() => import("@docs/Disclosure/main")),
    Size: dynamic(() => import("@docs/Disclosure/size")),
  },
  DisclosureGroupDemo: {
    Main: dynamic(() => import("@docs/DisclosureGroup/main")),
    Size: dynamic(() => import("@docs/DisclosureGroup/size")),
  },

  // Overlays
  PopoverDemo: {
    Main: dynamic(() => import("@docs/Popover/main")),
    Placement: dynamic(() => import("@docs/Popover/placement")),
  },
  TooltipDemo: {
    Main: dynamic(() => import("@docs/Tooltip/main")),
    Placement: dynamic(() => import("@docs/Tooltip/placement")),
  },
  DialogDemo: {
    Main: dynamic(() => import("@docs/Dialog/main")),
    Controlled: dynamic(() => import("@docs/Dialog/controlled")),
    Close: dynamic(() => import("@docs/Dialog/close")),
  },

  // Collections
  ListBoxDemo: {
    Main: dynamic(() => import("@docs/ListBox/main")),
    Sections: dynamic(() => import("@docs/ListBox/sections")),
    Size: dynamic(() => import("@docs/ListBox/size")),
    Content: dynamic(() => import("@docs/ListBox/content")),
  },
  MenuDemo: {
    Main: dynamic(() => import("@docs/Menu/main")),
    Content: dynamic(() => import("@docs/Menu/content")),
    Selection: dynamic(() => import("@docs/Menu/selection")),
    Sections: dynamic(() => import("@docs/Menu/sections")),
    Submenu: dynamic(() => import("@docs/Menu/submenu")),
    Size: dynamic(() => import("@docs/Menu/size")),
  },
  TableDemo: {
    Main: dynamic(() => import("@docs/Table/main")),
    Sorting: dynamic(() => import("@docs/Table/sorting")),
    Content: dynamic(() => import("@docs/Table/content")),
    Resizable: dynamic(() => import("@docs/Table/resizable")),
  },
  TagGroupDemo: {
    Main: dynamic(() => import("@docs/TagGroup/main")),
    Selection: dynamic(() => import("@docs/TagGroup/selection")),
    Removing: dynamic(() => import("@docs/TagGroup/removing")),
    Color: dynamic(() => import("@docs/TagGroup/color")),
    Size: dynamic(() => import("@docs/TagGroup/size")),
  },

  // Pickers
  SelectDemo: {
    Main: dynamic(() => import("@docs/Select/main")),
    Controlled: dynamic(() => import("@docs/Select/controlled")),
    Sections: dynamic(() => import("@docs/Select/sections")),
    States: dynamic(() => import("@docs/Select/states")),
    Size: dynamic(() => import("@docs/Select/size")),
    Links: dynamic(() => import("@docs/Select/links")),
  },
  ComboBoxDemo: {
    Main: dynamic(() => import("@docs/ComboBox/main")),
    Size: dynamic(() => import("@docs/ComboBox/size")),
    Content: dynamic(() => import("@docs/ComboBox/content")),
  },

  // Content
  AvatarDemo: {
    Main: dynamic(() => import("@docs/Avatar/main")),
    Size: dynamic(() => import("@docs/Avatar/size")),
    Radius: dynamic(() => import("@docs/Avatar/radius")),
  },
  ToolbarDemo: {
    Main: dynamic(() => import("@docs/Toolbar/main")),
    Orientation: dynamic(() => import("@docs/Toolbar/orientation")),
  },
  KbdDemo: {
    Main: dynamic(() => import("@docs/Kbd/main")),
    Variant: dynamic(() => import("@docs/Kbd/variant")),
    Size: dynamic(() => import("@docs/Kbd/size")),
  },
  DataListDemo: {
    Main: dynamic(() => import("@docs/DataList/main")),
    LabelPosition: dynamic(() => import("@docs/DataList/label-position")),
    Size: dynamic(() => import("@docs/DataList/size")),
  },

  // Color
  ColorSliderDemo: {
    Main: dynamic(() => import("@docs/ColorSlider/main")),
    Size: dynamic(() => import("@docs/ColorSlider/size")),
    Orientation: dynamic(() => import("@docs/ColorSlider/orientation")),
  },
};
