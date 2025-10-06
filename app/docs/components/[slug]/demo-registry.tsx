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

export const demoRegistry: Record<string, Record<string, ComponentType>> = {
  // Status
  badge: {
    main: dynamic(() => import(`${DOCS_DIR}/badge/main`)),
    size: dynamic(() => import(`${DOCS_DIR}/badge/size`)),
    intent: dynamic(() => import(`${DOCS_DIR}/badge/intent`)),
    content: dynamic(() => import(`${DOCS_DIR}/badge/content`)),
  },
  meter: {
    main: dynamic(() => import(`${DOCS_DIR}/meter/main`)),
    custom: dynamic(() => import(`${DOCS_DIR}/meter/custom`)),
    color: dynamic(() => import(`${DOCS_DIR}/meter/color`)),
  },
  "progress-bar": {
    main: dynamic(() => import(`${DOCS_DIR}/progress-bar/main`)),
    indeterminate: dynamic(
      () => import(`${DOCS_DIR}/progress-bar/indeterminate`)
    ),
  },
  "progress-circle": {
    main: dynamic(() => import(`${DOCS_DIR}/progress-circle/main`)),
    indeterminate: dynamic(
      () => import(`${DOCS_DIR}/progress-circle/indeterminate`)
    ),
    size: dynamic(() => import(`${DOCS_DIR}/progress-circle/size`)),
  },

  // Buttons
  button: {
    main: dynamic(() => import(`${DOCS_DIR}/button/main`)),
    variant: dynamic(() => import(`${DOCS_DIR}/button/variant`)),
    size: dynamic(() => import(`${DOCS_DIR}/button/size`)),
    intent: dynamic(() => import(`${DOCS_DIR}/button/intent`)),
    content: dynamic(() => import(`${DOCS_DIR}/button/content`)),
    pending: dynamic(() => import(`${DOCS_DIR}/button/pending`)),
    disabled: dynamic(() => import(`${DOCS_DIR}/button/disabled`)),
  },
  "toggle-button": {
    main: dynamic(() => import(`${DOCS_DIR}/toggle-button/main`)),
    controlled: dynamic(() => import(`${DOCS_DIR}/toggle-button/controlled`)),
    states: dynamic(() => import(`${DOCS_DIR}/toggle-button/states`)),
    size: dynamic(() => import(`${DOCS_DIR}/toggle-button/size`)),
    intent: dynamic(() => import(`${DOCS_DIR}/toggle-button/intent`)),
    variant: dynamic(() => import(`${DOCS_DIR}/toggle-button/variant`)),
  },
  "toggle-button-group": {
    main: dynamic(() => import(`${DOCS_DIR}/toggle-button-group/main`)),
    "selection-mode": dynamic(
      () => import(`${DOCS_DIR}/toggle-button-group/selection-mode`)
    ),
    states: dynamic(() => import(`${DOCS_DIR}/toggle-button-group/states`)),
    size: dynamic(() => import(`${DOCS_DIR}/toggle-button-group/size`)),
    variant: dynamic(() => import(`${DOCS_DIR}/toggle-button-group/variant`)),
  },

  // Forms
  form: {
    main: dynamic(() => import(`${DOCS_DIR}/form/main`)),
    validation: dynamic(() => import(`${DOCS_DIR}/form/validation`)),
  },
  field: {
    main: dynamic(() => import(`${DOCS_DIR}/field/main`)),
    "theme-size": dynamic(() => import(`${DOCS_DIR}/field/theme-size`)),
    "theme-variant": dynamic(() => import(`${DOCS_DIR}/field/theme-variant`)),
    "theme-label-position": dynamic(
      () => import(`${DOCS_DIR}/field/theme-label-position`)
    ),
  },
  checkbox: {
    main: dynamic(() => import(`${DOCS_DIR}/checkbox/main`)),
    group: dynamic(() => import(`${DOCS_DIR}/checkbox/group`)),
    states: dynamic(() => import(`${DOCS_DIR}/checkbox/states`)),
    size: dynamic(() => import(`${DOCS_DIR}/checkbox/size`)),
    variant: dynamic(() => import(`${DOCS_DIR}/checkbox/variant`)),
    description: dynamic(
      () => import(`${DOCS_DIR}/checkbox/checkbox-description`)
    ),
  },
  "number-field": {
    main: dynamic(() => import(`${DOCS_DIR}/number-field/main`)),
    states: dynamic(() => import(`${DOCS_DIR}/number-field/states`)),
    size: dynamic(() => import(`${DOCS_DIR}/number-field/size`)),
    variant: dynamic(() => import(`${DOCS_DIR}/number-field/variant`)),
    "label-position": dynamic(
      () => import(`${DOCS_DIR}/number-field/label-position`)
    ),
  },
  "radio-group": {
    main: dynamic(() => import(`${DOCS_DIR}/radio-group/main`)),
    orientation: dynamic(() => import(`${DOCS_DIR}/radio-group/orientation`)),
    "label-position": dynamic(
      () => import(`${DOCS_DIR}/radio-group/label-position`)
    ),
    size: dynamic(() => import(`${DOCS_DIR}/radio-group/size`)),
    variant: dynamic(() => import(`${DOCS_DIR}/radio-group/variant`)),
    "radio-description": dynamic(
      () => import(`${DOCS_DIR}/radio-group/radio-description`)
    ),
  },
  "search-field": {
    main: dynamic(() => import(`${DOCS_DIR}/search-field/main`)),
    controlled: dynamic(() => import(`${DOCS_DIR}/search-field/controlled`)),
    size: dynamic(() => import(`${DOCS_DIR}/search-field/size`)),
    variant: dynamic(() => import(`${DOCS_DIR}/search-field/variant`)),
    states: dynamic(() => import(`${DOCS_DIR}/search-field/states`)),
    prefixIcon: dynamic(() => import(`${DOCS_DIR}/search-field/prefix-icon`)),
  },
  slider: {
    main: dynamic(() => import(`${DOCS_DIR}/slider/main`)),
    filled: dynamic(() => import(`${DOCS_DIR}/slider/filled`)),
    controlled: dynamic(() => import(`${DOCS_DIR}/slider/controlled`)),
    "controlled-range": dynamic(
      () => import(`${DOCS_DIR}/slider/controlled-range`)
    ),
    orientation: dynamic(() => import(`${DOCS_DIR}/slider/orientation`)),
    "label-position": dynamic(
      () => import(`${DOCS_DIR}/slider/label-position`)
    ),
    variant: dynamic(() => import(`${DOCS_DIR}/slider/variant`)),
    size: dynamic(() => import(`${DOCS_DIR}/slider/size`)),
  },
  switch: {
    main: dynamic(() => import(`${DOCS_DIR}/switch/main`)),
    controlled: dynamic(() => import(`${DOCS_DIR}/switch/controlled`)),
    states: dynamic(() => import(`${DOCS_DIR}/switch/states`)),
    variant: dynamic(() => import(`${DOCS_DIR}/switch/variant`)),
    size: dynamic(() => import(`${DOCS_DIR}/switch/size`)),
    "label-position": dynamic(
      () => import(`${DOCS_DIR}/switch/label-position`)
    ),
  },
  "text-field": {
    main: dynamic(() => import(`${DOCS_DIR}/text-field/main`)),
    "label-position": dynamic(
      () => import(`${DOCS_DIR}/text-field/label-position`)
    ),
    size: dynamic(() => import(`${DOCS_DIR}/text-field/size`)),
    variant: dynamic(() => import(`${DOCS_DIR}/text-field/variant`)),
  },
  "text-area": {
    main: dynamic(() => import(`${DOCS_DIR}/text-area/main`)),
    "label-position": dynamic(
      () => import(`${DOCS_DIR}/text-area/label-position`)
    ),
    size: dynamic(() => import(`${DOCS_DIR}/text-area/size`)),
    variant: dynamic(() => import(`${DOCS_DIR}/text-area/variant`)),
  },

  // Navigation
  tabs: {
    main: dynamic(() => import(`${DOCS_DIR}/tabs/main`)),
    variant: dynamic(() => import(`${DOCS_DIR}/tabs/variant`)),
    size: dynamic(() => import(`${DOCS_DIR}/tabs/size`)),
    orientation: dynamic(() => import(`${DOCS_DIR}/tabs/orientation`)),
    controlled: dynamic(() => import(`${DOCS_DIR}/tabs/controlled`)),
    dynamic: dynamic(() => import(`${DOCS_DIR}/tabs/dynamic`)),
  },
  link: {
    main: dynamic(() => import(`${DOCS_DIR}/link/main`)),
    intent: dynamic(() => import(`${DOCS_DIR}/link/intent`)),
  },
  breadcrumbs: {
    main: dynamic(() => import(`${DOCS_DIR}/breadcrumbs/main`)),
  },
  disclosure: {
    main: dynamic(() => import(`${DOCS_DIR}/disclosure/main`)),
    size: dynamic(() => import(`${DOCS_DIR}/disclosure/size`)),
  },
  "disclosure-group": {
    main: dynamic(() => import(`${DOCS_DIR}/disclosure-group/main`)),
    size: dynamic(() => import(`${DOCS_DIR}/disclosure-group/size`)),
  },

  // Overlays
  popover: {
    main: dynamic(() => import(`${DOCS_DIR}/popover/main`)),
    placement: dynamic(() => import(`${DOCS_DIR}/popover/placement`)),
  },
  tooltip: {
    main: dynamic(() => import(`${DOCS_DIR}/tooltip/main`)),
    placement: dynamic(() => import(`${DOCS_DIR}/tooltip/placement`)),
  },
  dialog: {
    main: dynamic(() => import(`${DOCS_DIR}/dialog/main`)),
    controlled: dynamic(() => import(`${DOCS_DIR}/dialog/controlled`)),
    close: dynamic(() => import(`${DOCS_DIR}/dialog/close`)),
  },

  // Collections
  "list-box": {
    main: dynamic(() => import(`${DOCS_DIR}/list-box/main`)),
    sections: dynamic(() => import(`${DOCS_DIR}/list-box/sections`)),
    size: dynamic(() => import(`${DOCS_DIR}/list-box/size`)),
    content: dynamic(() => import(`${DOCS_DIR}/list-box/content`)),
  },
  menu: {
    main: dynamic(() => import(`${DOCS_DIR}/menu/main`)),
    content: dynamic(() => import(`${DOCS_DIR}/menu/content`)),
    selection: dynamic(() => import(`${DOCS_DIR}/menu/selection`)),
    sections: dynamic(() => import(`${DOCS_DIR}/menu/sections`)),
    submenu: dynamic(() => import(`${DOCS_DIR}/menu/submenu`)),
    size: dynamic(() => import(`${DOCS_DIR}/menu/size`)),
  },
  table: {
    main: dynamic(() => import(`${DOCS_DIR}/table/main`)),
    sorting: dynamic(() => import(`${DOCS_DIR}/table/sorting`)),
    content: dynamic(() => import(`${DOCS_DIR}/table/content`)),
    resizable: dynamic(() => import(`${DOCS_DIR}/table/resizable`)),
  },
  "tag-group": {
    main: dynamic(() => import(`${DOCS_DIR}/tag-group/main`)),
    selection: dynamic(() => import(`${DOCS_DIR}/tag-group/selection`)),
    removing: dynamic(() => import(`${DOCS_DIR}/tag-group/removing`)),
    color: dynamic(() => import(`${DOCS_DIR}/tag-group/color`)),
    size: dynamic(() => import(`${DOCS_DIR}/tag-group/size`)),
  },

  // Pickers
  select: {
    main: dynamic(() => import(`${DOCS_DIR}/select/main`)),
    controlled: dynamic(() => import(`${DOCS_DIR}/select/controlled`)),
    sections: dynamic(() => import(`${DOCS_DIR}/select/sections`)),
    states: dynamic(() => import(`${DOCS_DIR}/select/states`)),
    size: dynamic(() => import(`${DOCS_DIR}/select/size`)),
    links: dynamic(() => import(`${DOCS_DIR}/select/links`)),
  },
  "combo-box": {
    main: dynamic(() => import(`${DOCS_DIR}/combo-box/main`)),
    size: dynamic(() => import(`${DOCS_DIR}/combo-box/size`)),
    content: dynamic(() => import(`${DOCS_DIR}/combo-box/content`)),
  },

  // Content
  avatar: {
    main: dynamic(() => import(`${DOCS_DIR}/avatar/main`)),
    size: dynamic(() => import(`${DOCS_DIR}/avatar/size`)),
    radius: dynamic(() => import(`${DOCS_DIR}/avatar/radius`)),
  },
  toolbar: {
    main: dynamic(() => import(`${DOCS_DIR}/toolbar/main`)),
    orientation: dynamic(() => import(`${DOCS_DIR}/toolbar/orientation`)),
  },
  kbd: {
    main: dynamic(() => import(`${DOCS_DIR}/kbd/main`)),
    variant: dynamic(() => import(`${DOCS_DIR}/kbd/variant`)),
    size: dynamic(() => import(`${DOCS_DIR}/kbd/size`)),
  },
  "data-list": {
    main: dynamic(() => import(`${DOCS_DIR}/data-list/main`)),
    "label-position": dynamic(
      () => import(`${DOCS_DIR}/data-list/label-position`)
    ),
    size: dynamic(() => import(`${DOCS_DIR}/data-list/size`)),
  },

  // Color
  "color-slider": {
    main: dynamic(() => import(`${DOCS_DIR}/color-slider/main`)),
    size: dynamic(() => import(`${DOCS_DIR}/color-slider/size`)),
    orientation: dynamic(() => import(`${DOCS_DIR}/color-slider/orientation`)),
  },
};
