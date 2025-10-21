import dynamic from "next/dynamic";
import type { ComponentType } from "react";

const COMPONENT_DEMOS_PATH = "@/app/(docs)/components/[slug]/content";
const GUIDE_DEMOS_PATH = "@/app/(docs)/[slug]/content/demos";

export const demoRegistry: Record<string, Record<string, ComponentType>> = {
  // TODO: add loaders

  theme: {
    "field-variant": dynamic(
      () => import(`${GUIDE_DEMOS_PATH}/theme-field-variant`)
    ),
    "button-variant": dynamic(
      () => import(`${GUIDE_DEMOS_PATH}/theme-button-variant`)
    ),
    size: dynamic(() => import(`${GUIDE_DEMOS_PATH}/theme-size`)),
  },

  // Status
  badge: {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/badge/main`)),
    size: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/badge/size`)),
    intent: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/badge/intent`)),
    content: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/badge/content`)),
  },
  meter: {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/meter/main`)),
    custom: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/meter/custom`)),
    color: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/meter/color`)),
  },
  "progress-bar": {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/progress-bar/main`)),
    indeterminate: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/progress-bar/indeterminate`)
    ),
  },
  "progress-circle": {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/progress-circle/main`)),
    indeterminate: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/progress-circle/indeterminate`)
    ),
    size: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/progress-circle/size`)),
  },

  // Buttons
  button: {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/button/main`)),
    variant: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/button/variant`)),
    size: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/button/size`)),
    intent: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/button/intent`)),
    content: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/button/content`)),
    pending: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/button/pending`)),
    disabled: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/button/disabled`)),
  },
  "toggle-button": {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/toggle-button/main`)),
    controlled: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/toggle-button/controlled`)
    ),
    states: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/toggle-button/states`)
    ),
    size: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/toggle-button/size`)),
    intent: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/toggle-button/intent`)
    ),
    variant: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/toggle-button/variant`)
    ),
  },
  "toggle-button-group": {
    main: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/toggle-button-group/main`)
    ),
    "selection-mode": dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/toggle-button-group/selection-mode`)
    ),
    states: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/toggle-button-group/states`)
    ),
    size: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/toggle-button-group/size`)
    ),
    variant: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/toggle-button-group/variant`)
    ),
  },

  // Forms
  form: {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/form/main`)),
    validation: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/form/validation`)
    ),
  },
  field: {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/field/main`)),
    "theme-size": dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/field/theme-size`)
    ),
    "theme-variant": dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/field/theme-variant`)
    ),
    "theme-label-position": dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/field/theme-label-position`)
    ),
  },
  checkbox: {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/checkbox/main`)),
    group: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/checkbox/group`)),
    states: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/checkbox/states`)),
    size: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/checkbox/size`)),
    variant: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/checkbox/variant`)),
    description: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/checkbox/checkbox-description`)
    ),
  },
  "number-field": {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/number-field/main`)),
    states: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/number-field/states`)
    ),
    size: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/number-field/size`)),
    variant: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/number-field/variant`)
    ),
    "label-position": dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/number-field/label-position`)
    ),
  },
  "radio-group": {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/radio-group/main`)),
    orientation: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/radio-group/orientation`)
    ),
    "label-position": dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/radio-group/label-position`)
    ),
    size: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/radio-group/size`)),
    variant: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/radio-group/variant`)
    ),
    "radio-description": dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/radio-group/radio-description`)
    ),
  },
  "search-field": {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/search-field/main`)),
    controlled: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/search-field/controlled`)
    ),
    size: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/search-field/size`)),
    variant: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/search-field/variant`)
    ),
    states: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/search-field/states`)
    ),
    prefixIcon: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/search-field/prefix-icon`)
    ),
  },
  slider: {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/slider/main`)),
    filled: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/slider/filled`)),
    controlled: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/slider/controlled`)
    ),
    "controlled-range": dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/slider/controlled-range`)
    ),
    orientation: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/slider/orientation`)
    ),
    "label-position": dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/slider/label-position`)
    ),
    variant: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/slider/variant`)),
    size: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/slider/size`)),
  },
  switch: {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/switch/main`)),
    controlled: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/switch/controlled`)
    ),
    states: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/switch/states`)),
    variant: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/switch/variant`)),
    size: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/switch/size`)),
    "label-position": dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/switch/label-position`)
    ),
  },
  "text-field": {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/text-field/main`)),
    "label-position": dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/text-field/label-position`)
    ),
    size: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/text-field/size`)),
    variant: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/text-field/variant`)
    ),
  },
  "text-area": {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/text-area/main`)),
    "label-position": dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/text-area/label-position`)
    ),
    size: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/text-area/size`)),
    variant: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/text-area/variant`)),
  },

  // Navigation
  tabs: {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/tabs/main`)),
    variant: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/tabs/variant`)),
    size: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/tabs/size`)),
    orientation: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/tabs/orientation`)
    ),
    controlled: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/tabs/controlled`)
    ),
    dynamic: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/tabs/dynamic`)),
  },
  link: {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/link/main`)),
    intent: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/link/intent`)),
  },
  breadcrumbs: {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/breadcrumbs/main`)),
  },
  disclosure: {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/disclosure/main`)),
    size: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/disclosure/size`)),
  },
  "disclosure-group": {
    main: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/disclosure-group/main`)
    ),
    size: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/disclosure-group/size`)
    ),
  },

  // Overlays
  popover: {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/popover/main`)),
    placement: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/popover/placement`)
    ),
  },
  tooltip: {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/tooltip/main`)),
    placement: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/tooltip/placement`)
    ),
  },
  dialog: {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/dialog/main`)),
    controlled: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/dialog/controlled`)
    ),
    close: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/dialog/close`)),
  },

  // Collections
  "list-box": {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/list-box/main`)),
    sections: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/list-box/sections`)
    ),
    size: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/list-box/size`)),
    content: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/list-box/content`)),
  },
  menu: {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/menu/main`)),
    content: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/menu/content`)),
    selection: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/menu/selection`)),
    sections: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/menu/sections`)),
    submenu: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/menu/submenu`)),
    size: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/menu/size`)),
  },
  table: {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/table/main`)),
    sorting: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/table/sorting`)),
    content: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/table/content`)),
    resizable: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/table/resizable`)),
  },
  "tag-group": {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/tag-group/main`)),
    selection: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/tag-group/selection`)
    ),
    removing: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/tag-group/removing`)
    ),
    color: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/tag-group/color`)),
    size: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/tag-group/size`)),
  },

  // Pickers
  autocomplete: {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/autocomplete/main`)),
    content: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/autocomplete/content`)
    ),
    size: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/autocomplete/size`)),
  },
  select: {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/select/main`)),
    controlled: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/select/controlled`)
    ),
    sections: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/select/sections`)),
    states: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/select/states`)),
    size: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/select/size`)),
    links: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/select/links`)),
  },
  "combo-box": {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/combo-box/main`)),
    size: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/combo-box/size`)),
    content: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/combo-box/content`)),
  },

  // Content
  avatar: {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/avatar/main`)),
    size: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/avatar/size`)),
    radius: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/avatar/radius`)),
    color: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/avatar/color`)),
  },
  toolbar: {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/toolbar/main`)),
    orientation: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/toolbar/orientation`)
    ),
  },
  kbd: {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/kbd/main`)),
    variant: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/kbd/variant`)),
    size: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/kbd/size`)),
  },
  "data-list": {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/data-list/main`)),
    "label-position": dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/data-list/label-position`)
    ),
    size: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/data-list/size`)),
  },

  // Color
  "color-area": {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/color-area/main`)),
  },
  "color-field": {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/color-field/main`)),
  },
  "color-picker": {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/color-picker/main`)),
  },
  "color-slider": {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/color-slider/main`)),
    size: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/color-slider/size`)),
    orientation: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/color-slider/orientation`)
    ),
  },
  "color-swatch": {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/color-swatch/main`)),
  },
  "color-swatch-picker": {
    main: dynamic(
      () => import(`${COMPONENT_DEMOS_PATH}/color-swatch-picker/main`)
    ),
  },

  // Drag and Drop
  "drop-zone": {
    main: dynamic(() => import(`${COMPONENT_DEMOS_PATH}/drop-zone/main`)),
  },
};
