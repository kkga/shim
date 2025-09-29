/** biome-ignore-all lint/style/useNamingConvention: demo component names */

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { ComponentMetadata } from "@/app/_lib/types";
import { toKebabCase } from "@/app/_lib/utils";
import { ProgressBar } from "@/components/progress-bar";

export function getMainDemo(name: ComponentMetadata["name"]) {
  let filename = toKebabCase(name);
  return dynamic(() => import(`@/docs/${filename}/main`), {
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

interface DemoComponent {
  Main: ComponentType<object>;
  [key: string]: ComponentType<object>;
}

export const demoComponents: Record<string, DemoComponent> = {
  // Status
  BadgeDemo: {
    Main: dynamic(() => import("@/docs/badge/main")),
    Size: dynamic(() => import("@/docs/badge/size")),
    Intent: dynamic(() => import("@/docs/badge/intent")),
    Content: dynamic(() => import("@/docs/badge/content")),
  },
  MeterDemo: {
    Main: dynamic(() => import("@/docs/meter/main")),
    Custom: dynamic(() => import("@/docs/meter/custom")),
    Color: dynamic(() => import("@/docs/meter/color")),
  },
  ProgressBarDemo: {
    Main: dynamic(() => import("@/docs/progress-bar/main")),
    Indeterminate: dynamic(() => import("@/docs/progress-bar/indeterminate")),
  },
  ProgressCircleDemo: {
    Main: dynamic(() => import("@/docs/progress-circle/main")),
    Indeterminate: dynamic(
      () => import("@/docs/progress-circle/indeterminate")
    ),
    Size: dynamic(() => import("@/docs/progress-circle/size")),
  },

  // Buttons
  ButtonDemo: {
    Main: dynamic(() => import("@/docs/button/main")),
    Variant: dynamic(() => import("@/docs/button/variant")),
    Size: dynamic(() => import("@/docs/button/size")),
    Intent: dynamic(() => import("@/docs/button/intent")),
    Content: dynamic(() => import("@/docs/button/content")),
    Pending: dynamic(() => import("@/docs/button/pending")),
    Disabled: dynamic(() => import("@/docs/button/disabled")),
  },
  ToggleButtonDemo: {
    Main: dynamic(() => import("@/docs/toggle-button/main")),
    Controlled: dynamic(() => import("@/docs/toggle-button/controlled")),
    States: dynamic(() => import("@/docs/toggle-button/states")),
    Size: dynamic(() => import("@/docs/toggle-button/size")),
    Intent: dynamic(() => import("@/docs/toggle-button/intent")),
    Variant: dynamic(() => import("@/docs/toggle-button/variant")),
  },
  ToggleButtonGroupDemo: {
    Main: dynamic(() => import("@/docs/toggle-button-group/main")),
    SelectionMode: dynamic(
      () => import("@/docs/toggle-button-group/selection-mode")
    ),
    States: dynamic(() => import("@/docs/toggle-button-group/states")),
    Size: dynamic(() => import("@/docs/toggle-button-group/size")),
    Variant: dynamic(() => import("@/docs/toggle-button-group/variant")),
  },

  // Forms
  FormDemo: {
    Main: dynamic(() => import("@/docs/form/main")),
    Validation: dynamic(() => import("@/docs/form/validation")),
  },
  FieldDemo: {
    Main: dynamic(() => import("@/docs/field/main")),
    ThemeSize: dynamic(() => import("@/docs/field/theme-size")),
    ThemeVariant: dynamic(() => import("@/docs/field/theme-variant")),
    ThemeLabelPosition: dynamic(
      () => import("@/docs/field/theme-label-position")
    ),
  },
  CheckboxDemo: {
    Main: dynamic(() => import("@/docs/checkbox/main")),
    Group: dynamic(() => import("@/docs/checkbox/group")),
    States: dynamic(() => import("@/docs/checkbox/states")),
    Size: dynamic(() => import("@/docs/checkbox/size")),
    Variant: dynamic(() => import("@/docs/checkbox/variant")),
    Description: dynamic(() => import("@/docs/checkbox/checkbox-description")),
  },
  NumberFieldDemo: {
    Main: dynamic(() => import("@/docs/number-field/main")),
    States: dynamic(() => import("@/docs/number-field/states")),
    Size: dynamic(() => import("@/docs/number-field/size")),
    Variant: dynamic(() => import("@/docs/number-field/variant")),
    LabelPosition: dynamic(() => import("@/docs/number-field/label-position")),
  },
  RadioGroupDemo: {
    Main: dynamic(() => import("@/docs/radio-group/main")),
    Orientation: dynamic(() => import("@/docs/radio-group/orientation")),
    LabelPosition: dynamic(() => import("@/docs/radio-group/label-position")),
    Size: dynamic(() => import("@/docs/radio-group/size")),
    Variant: dynamic(() => import("@/docs/radio-group/variant")),
    RadioDescription: dynamic(
      () => import("@/docs/radio-group/radio-description")
    ),
  },
  SearchFieldDemo: {
    Main: dynamic(() => import("@/docs/search-field/main")),
    Controlled: dynamic(() => import("@/docs/search-field/controlled")),
    Size: dynamic(() => import("@/docs/search-field/size")),
    Variant: dynamic(() => import("@/docs/search-field/variant")),
    States: dynamic(() => import("@/docs/search-field/states")),
    PrefixIcon: dynamic(() => import("@/docs/search-field/prefix-icon")),
  },
  SliderDemo: {
    Main: dynamic(() => import("@/docs/slider/main")),
    Filled: dynamic(() => import("@/docs/slider/filled")),
    Controlled: dynamic(() => import("@/docs/slider/controlled")),
    ControlledRange: dynamic(() => import("@/docs/slider/controlled-range")),
    Orientation: dynamic(() => import("@/docs/slider/orientation")),
    LabelPosition: dynamic(() => import("@/docs/slider/label-position")),
    Variant: dynamic(() => import("@/docs/slider/variant")),
    Size: dynamic(() => import("@/docs/slider/size")),
  },
  SwitchDemo: {
    Main: dynamic(() => import("@/docs/switch/main")),
    Controlled: dynamic(() => import("@/docs/switch/controlled")),
    States: dynamic(() => import("@/docs/switch/states")),
    Variant: dynamic(() => import("@/docs/switch/variant")),
    Size: dynamic(() => import("@/docs/switch/size")),
    LabelPosition: dynamic(() => import("@/docs/switch/label-position")),
  },
  TextFieldDemo: {
    Main: dynamic(() => import("@/docs/text-field/main")),
    LabelPosition: dynamic(() => import("@/docs/text-field/label-position")),
    Size: dynamic(() => import("@/docs/text-field/size")),
    Variant: dynamic(() => import("@/docs/text-field/variant")),
  },
  TextAreaDemo: {
    Main: dynamic(() => import("@/docs/text-area/main")),
    LabelPosition: dynamic(() => import("@/docs/text-area/label-position")),
    Size: dynamic(() => import("@/docs/text-area/size")),
    Variant: dynamic(() => import("@/docs/text-area/variant")),
  },

  // Navigation
  TabsDemo: {
    Main: dynamic(() => import("@/docs/tabs/main")),
    Variant: dynamic(() => import("@/docs/tabs/variant")),
    Size: dynamic(() => import("@/docs/tabs/size")),
    Orientation: dynamic(() => import("@/docs/tabs/orientation")),
    Controlled: dynamic(() => import("@/docs/tabs/controlled")),
    Dynamic: dynamic(() => import("@/docs/tabs/dynamic")),
  },
  LinkDemo: {
    Main: dynamic(() => import("@/docs/link/main")),
    Intent: dynamic(() => import("@/docs/link/intent")),
  },
  BreadcrumbsDemo: {
    Main: dynamic(() => import("@/docs/breadcrumbs/main")),
  },
  DisclosureDemo: {
    Main: dynamic(() => import("@/docs/disclosure/main")),
    Size: dynamic(() => import("@/docs/disclosure/size")),
  },
  DisclosureGroupDemo: {
    Main: dynamic(() => import("@/docs/disclosure-group/main")),
    Size: dynamic(() => import("@/docs/disclosure-group/size")),
  },

  // Overlays
  PopoverDemo: {
    Main: dynamic(() => import("@/docs/popover/main")),
    Placement: dynamic(() => import("@/docs/popover/placement")),
  },
  TooltipDemo: {
    Main: dynamic(() => import("@/docs/tooltip/main")),
    Placement: dynamic(() => import("@/docs/tooltip/placement")),
  },
  DialogDemo: {
    Main: dynamic(() => import("@/docs/dialog/main")),
    Controlled: dynamic(() => import("@/docs/dialog/controlled")),
    Close: dynamic(() => import("@/docs/dialog/close")),
  },

  // Collections
  ListBoxDemo: {
    Main: dynamic(() => import("@/docs/list-box/main")),
    Sections: dynamic(() => import("@/docs/list-box/sections")),
    Size: dynamic(() => import("@/docs/list-box/size")),
    Content: dynamic(() => import("@/docs/list-box/content")),
  },
  MenuDemo: {
    Main: dynamic(() => import("@/docs/menu/main")),
    Content: dynamic(() => import("@/docs/menu/content")),
    Selection: dynamic(() => import("@/docs/menu/selection")),
    Sections: dynamic(() => import("@/docs/menu/sections")),
    Submenu: dynamic(() => import("@/docs/menu/submenu")),
    Size: dynamic(() => import("@/docs/menu/size")),
  },
  TableDemo: {
    Main: dynamic(() => import("@/docs/table/main")),
    Sorting: dynamic(() => import("@/docs/table/sorting")),
    Content: dynamic(() => import("@/docs/table/content")),
    Resizable: dynamic(() => import("@/docs/table/resizable")),
  },
  TagGroupDemo: {
    Main: dynamic(() => import("@/docs/tag-group/main")),
    Selection: dynamic(() => import("@/docs/tag-group/selection")),
    Removing: dynamic(() => import("@/docs/tag-group/removing")),
    Color: dynamic(() => import("@/docs/tag-group/color")),
    Size: dynamic(() => import("@/docs/tag-group/size")),
  },

  // Pickers
  SelectDemo: {
    Main: dynamic(() => import("@/docs/select/main")),
    Controlled: dynamic(() => import("@/docs/select/controlled")),
    Sections: dynamic(() => import("@/docs/select/sections")),
    States: dynamic(() => import("@/docs/select/states")),
    Size: dynamic(() => import("@/docs/select/size")),
    Links: dynamic(() => import("@/docs/select/links")),
  },
  ComboBoxDemo: {
    Main: dynamic(() => import("@/docs/combo-box/main")),
    Size: dynamic(() => import("@/docs/combo-box/size")),
    Content: dynamic(() => import("@/docs/combo-box/content")),
  },

  // Content
  AvatarDemo: {
    Main: dynamic(() => import("@/docs/avatar/main")),
    Size: dynamic(() => import("@/docs/avatar/size")),
    Radius: dynamic(() => import("@/docs/avatar/radius")),
  },
  ToolbarDemo: {
    Main: dynamic(() => import("@/docs/toolbar/main")),
    Orientation: dynamic(() => import("@/docs/toolbar/orientation")),
  },
  KbdDemo: {
    Main: dynamic(() => import("@/docs/kbd/main")),
    Variant: dynamic(() => import("@/docs/kbd/variant")),
    Size: dynamic(() => import("@/docs/kbd/size")),
  },
  DataListDemo: {
    Main: dynamic(() => import("@/docs/data-list/main")),
    LabelPosition: dynamic(() => import("@/docs/data-list/label-position")),
    Size: dynamic(() => import("@/docs/data-list/size")),
  },

  // Color
  ColorSliderDemo: {
    Main: dynamic(() => import("@/docs/color-slider/main")),
    Size: dynamic(() => import("@/docs/color-slider/size")),
    Orientation: dynamic(() => import("@/docs/color-slider/orientation")),
  },
};
