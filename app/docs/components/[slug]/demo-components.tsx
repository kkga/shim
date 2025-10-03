import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { ComponentMetadata } from "@/app/_lib/types";
import { toKebabCase } from "@/app/_lib/utils";
import { ProgressBar } from "@/shim-ui/progress-bar";

const DOCS_DIR = "@/app/docs/components/[slug]/content";

export function getMainDemo(name: ComponentMetadata["name"]) {
  let filename = toKebabCase(name);
  return dynamic(() => import(`${DOCS_DIR}/${filename}/main`), {
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

export const demoComponents: Record<string, Record<string, ComponentType>> = {
  // Status
  BadgeDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/badge/main`)),
    Size: dynamic(() => import(`${DOCS_DIR}/badge/size`)),
    Intent: dynamic(() => import(`${DOCS_DIR}/badge/intent`)),
    Content: dynamic(() => import(`${DOCS_DIR}/badge/content`)),
  },
  MeterDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/meter/main`)),
    Custom: dynamic(() => import(`${DOCS_DIR}/meter/custom`)),
    Color: dynamic(() => import(`${DOCS_DIR}/meter/color`)),
  },
  ProgressBarDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/progress-bar/main`)),
    Indeterminate: dynamic(
      () => import(`${DOCS_DIR}/progress-bar/indeterminate`)
    ),
  },
  ProgressCircleDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/progress-circle/main`)),
    Indeterminate: dynamic(
      () => import(`${DOCS_DIR}/progress-circle/indeterminate`)
    ),
    Size: dynamic(() => import(`${DOCS_DIR}/progress-circle/size`)),
  },

  // Buttons
  ButtonDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/button/main`)),
    Variant: dynamic(() => import(`${DOCS_DIR}/button/variant`)),
    Size: dynamic(() => import(`${DOCS_DIR}/button/size`)),
    Intent: dynamic(() => import(`${DOCS_DIR}/button/intent`)),
    Content: dynamic(() => import(`${DOCS_DIR}/button/content`)),
    Pending: dynamic(() => import(`${DOCS_DIR}/button/pending`)),
    Disabled: dynamic(() => import(`${DOCS_DIR}/button/disabled`)),
  },
  ToggleButtonDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/toggle-button/main`)),
    Controlled: dynamic(() => import(`${DOCS_DIR}/toggle-button/controlled`)),
    States: dynamic(() => import(`${DOCS_DIR}/toggle-button/states`)),
    Size: dynamic(() => import(`${DOCS_DIR}/toggle-button/size`)),
    Intent: dynamic(() => import(`${DOCS_DIR}/toggle-button/intent`)),
    Variant: dynamic(() => import(`${DOCS_DIR}/toggle-button/variant`)),
  },
  ToggleButtonGroupDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/toggle-button-group/main`)),
    SelectionMode: dynamic(
      () => import(`${DOCS_DIR}/toggle-button-group/selection-mode`)
    ),
    States: dynamic(() => import(`${DOCS_DIR}/toggle-button-group/states`)),
    Size: dynamic(() => import(`${DOCS_DIR}/toggle-button-group/size`)),
    Variant: dynamic(() => import(`${DOCS_DIR}/toggle-button-group/variant`)),
  },

  // Forms
  FormDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/form/main`)),
    Validation: dynamic(() => import(`${DOCS_DIR}/form/validation`)),
  },
  FieldDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/field/main`)),
    ThemeSize: dynamic(() => import(`${DOCS_DIR}/field/theme-size`)),
    ThemeVariant: dynamic(() => import(`${DOCS_DIR}/field/theme-variant`)),
    ThemeLabelPosition: dynamic(
      () => import(`${DOCS_DIR}/field/theme-label-position`)
    ),
  },
  CheckboxDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/checkbox/main`)),
    Group: dynamic(() => import(`${DOCS_DIR}/checkbox/group`)),
    States: dynamic(() => import(`${DOCS_DIR}/checkbox/states`)),
    Size: dynamic(() => import(`${DOCS_DIR}/checkbox/size`)),
    Variant: dynamic(() => import(`${DOCS_DIR}/checkbox/variant`)),
    Description: dynamic(
      () => import(`${DOCS_DIR}/checkbox/checkbox-description`)
    ),
  },
  NumberFieldDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/number-field/main`)),
    States: dynamic(() => import(`${DOCS_DIR}/number-field/states`)),
    Size: dynamic(() => import(`${DOCS_DIR}/number-field/size`)),
    Variant: dynamic(() => import(`${DOCS_DIR}/number-field/variant`)),
    LabelPosition: dynamic(
      () => import(`${DOCS_DIR}/number-field/label-position`)
    ),
  },
  RadioGroupDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/radio-group/main`)),
    Orientation: dynamic(() => import(`${DOCS_DIR}/radio-group/orientation`)),
    LabelPosition: dynamic(
      () => import(`${DOCS_DIR}/radio-group/label-position`)
    ),
    Size: dynamic(() => import(`${DOCS_DIR}/radio-group/size`)),
    Variant: dynamic(() => import(`${DOCS_DIR}/radio-group/variant`)),
    RadioDescription: dynamic(
      () => import(`${DOCS_DIR}/radio-group/radio-description`)
    ),
  },
  SearchFieldDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/search-field/main`)),
    Controlled: dynamic(() => import(`${DOCS_DIR}/search-field/controlled`)),
    Size: dynamic(() => import(`${DOCS_DIR}/search-field/size`)),
    Variant: dynamic(() => import(`${DOCS_DIR}/search-field/variant`)),
    States: dynamic(() => import(`${DOCS_DIR}/search-field/states`)),
    PrefixIcon: dynamic(() => import(`${DOCS_DIR}/search-field/prefix-icon`)),
  },
  SliderDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/slider/main`)),
    Filled: dynamic(() => import(`${DOCS_DIR}/slider/filled`)),
    Controlled: dynamic(() => import(`${DOCS_DIR}/slider/controlled`)),
    ControlledRange: dynamic(
      () => import(`${DOCS_DIR}/slider/controlled-range`)
    ),
    Orientation: dynamic(() => import(`${DOCS_DIR}/slider/orientation`)),
    LabelPosition: dynamic(() => import(`${DOCS_DIR}/slider/label-position`)),
    Variant: dynamic(() => import(`${DOCS_DIR}/slider/variant`)),
    Size: dynamic(() => import(`${DOCS_DIR}/slider/size`)),
  },
  SwitchDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/switch/main`)),
    Controlled: dynamic(() => import(`${DOCS_DIR}/switch/controlled`)),
    States: dynamic(() => import(`${DOCS_DIR}/switch/states`)),
    Variant: dynamic(() => import(`${DOCS_DIR}/switch/variant`)),
    Size: dynamic(() => import(`${DOCS_DIR}/switch/size`)),
    LabelPosition: dynamic(() => import(`${DOCS_DIR}/switch/label-position`)),
  },
  TextFieldDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/text-field/main`)),
    LabelPosition: dynamic(
      () => import(`${DOCS_DIR}/text-field/label-position`)
    ),
    Size: dynamic(() => import(`${DOCS_DIR}/text-field/size`)),
    Variant: dynamic(() => import(`${DOCS_DIR}/text-field/variant`)),
  },
  TextAreaDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/text-area/main`)),
    LabelPosition: dynamic(
      () => import(`${DOCS_DIR}/text-area/label-position`)
    ),
    Size: dynamic(() => import(`${DOCS_DIR}/text-area/size`)),
    Variant: dynamic(() => import(`${DOCS_DIR}/text-area/variant`)),
  },

  // Navigation
  TabsDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/tabs/main`)),
    Variant: dynamic(() => import(`${DOCS_DIR}/tabs/variant`)),
    Size: dynamic(() => import(`${DOCS_DIR}/tabs/size`)),
    Orientation: dynamic(() => import(`${DOCS_DIR}/tabs/orientation`)),
    Controlled: dynamic(() => import(`${DOCS_DIR}/tabs/controlled`)),
    Dynamic: dynamic(() => import(`${DOCS_DIR}/tabs/dynamic`)),
  },
  LinkDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/link/main`)),
    Intent: dynamic(() => import(`${DOCS_DIR}/link/intent`)),
  },
  BreadcrumbsDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/breadcrumbs/main`)),
  },
  DisclosureDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/disclosure/main`)),
    Size: dynamic(() => import(`${DOCS_DIR}/disclosure/size`)),
  },
  DisclosureGroupDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/disclosure-group/main`)),
    Size: dynamic(() => import(`${DOCS_DIR}/disclosure-group/size`)),
  },

  // Overlays
  PopoverDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/popover/main`)),
    Placement: dynamic(() => import(`${DOCS_DIR}/popover/placement`)),
  },
  TooltipDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/tooltip/main`)),
    Placement: dynamic(() => import(`${DOCS_DIR}/tooltip/placement`)),
  },
  DialogDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/dialog/main`)),
    Controlled: dynamic(() => import(`${DOCS_DIR}/dialog/controlled`)),
    Close: dynamic(() => import(`${DOCS_DIR}/dialog/close`)),
  },

  // Collections
  ListBoxDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/list-box/main`)),
    Sections: dynamic(() => import(`${DOCS_DIR}/list-box/sections`)),
    Size: dynamic(() => import(`${DOCS_DIR}/list-box/size`)),
    Content: dynamic(() => import(`${DOCS_DIR}/list-box/content`)),
  },
  MenuDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/menu/main`)),
    Content: dynamic(() => import(`${DOCS_DIR}/menu/content`)),
    Selection: dynamic(() => import(`${DOCS_DIR}/menu/selection`)),
    Sections: dynamic(() => import(`${DOCS_DIR}/menu/sections`)),
    Submenu: dynamic(() => import(`${DOCS_DIR}/menu/submenu`)),
    Size: dynamic(() => import(`${DOCS_DIR}/menu/size`)),
  },
  TableDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/table/main`)),
    Sorting: dynamic(() => import(`${DOCS_DIR}/table/sorting`)),
    Content: dynamic(() => import(`${DOCS_DIR}/table/content`)),
    Resizable: dynamic(() => import(`${DOCS_DIR}/table/resizable`)),
  },
  TagGroupDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/tag-group/main`)),
    Selection: dynamic(() => import(`${DOCS_DIR}/tag-group/selection`)),
    Removing: dynamic(() => import(`${DOCS_DIR}/tag-group/removing`)),
    Color: dynamic(() => import(`${DOCS_DIR}/tag-group/color`)),
    Size: dynamic(() => import(`${DOCS_DIR}/tag-group/size`)),
  },

  // Pickers
  SelectDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/select/main`)),
    Controlled: dynamic(() => import(`${DOCS_DIR}/select/controlled`)),
    Sections: dynamic(() => import(`${DOCS_DIR}/select/sections`)),
    States: dynamic(() => import(`${DOCS_DIR}/select/states`)),
    Size: dynamic(() => import(`${DOCS_DIR}/select/size`)),
    Links: dynamic(() => import(`${DOCS_DIR}/select/links`)),
  },
  ComboBoxDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/combo-box/main`)),
    Size: dynamic(() => import(`${DOCS_DIR}/combo-box/size`)),
    Content: dynamic(() => import(`${DOCS_DIR}/combo-box/content`)),
  },

  // Content
  AvatarDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/avatar/main`)),
    Size: dynamic(() => import(`${DOCS_DIR}/avatar/size`)),
    Radius: dynamic(() => import(`${DOCS_DIR}/avatar/radius`)),
  },
  ToolbarDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/toolbar/main`)),
    Orientation: dynamic(() => import(`${DOCS_DIR}/toolbar/orientation`)),
  },
  KbdDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/kbd/main`)),
    Variant: dynamic(() => import(`${DOCS_DIR}/kbd/variant`)),
    Size: dynamic(() => import(`${DOCS_DIR}/kbd/size`)),
  },
  DataListDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/data-list/main`)),
    LabelPosition: dynamic(
      () => import(`${DOCS_DIR}/data-list/label-position`)
    ),
    Size: dynamic(() => import(`${DOCS_DIR}/data-list/size`)),
  },

  // Color
  ColorSliderDemo: {
    Main: dynamic(() => import(`${DOCS_DIR}/color-slider/main`)),
    Size: dynamic(() => import(`${DOCS_DIR}/color-slider/size`)),
    Orientation: dynamic(() => import(`${DOCS_DIR}/color-slider/orientation`)),
  },
};
