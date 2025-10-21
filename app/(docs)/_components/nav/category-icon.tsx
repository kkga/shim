import type { IconProps } from "@phosphor-icons/react";
import {
  ArticleIcon,
  CalendarIcon,
  CardsIcon,
  CheckFatIcon,
  CursorClickIcon,
  FlagBannerIcon,
  GithubLogoIcon,
  HandGrabbingIcon,
  HouseSimpleIcon,
  LightningIcon,
  PaletteIcon,
  PathIcon,
  RowsIcon,
  SwatchesIcon,
  TextboxIcon,
  WarningDiamondIcon,
  XLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { match } from "ts-pattern";

interface Props {
  name: string;
}

export function CategoryIcon({ name }: Props): React.ReactNode {
  let iconProps: IconProps = { size: 16, weight: "duotone" };

  return (
    match(name)
      // Category Icons
      .with("Intro", () => <HouseSimpleIcon {...iconProps} />)
      .with("Overlays", () => <CardsIcon {...iconProps} />)
      .with("Forms", () => <TextboxIcon {...iconProps} />)
      .with("Status", () => <WarningDiamondIcon {...iconProps} />)
      .with("Buttons", () => <CursorClickIcon {...iconProps} />)
      .with("Pickers", () => <CheckFatIcon {...iconProps} />)
      .with("Navigation", () => <PathIcon {...iconProps} />)
      .with("Collections", () => <RowsIcon {...iconProps} />)
      .with("Content", () => <ArticleIcon {...iconProps} />)
      .with("Date and time", () => <CalendarIcon {...iconProps} />)
      .with("Drag and drop", () => <HandGrabbingIcon {...iconProps} />)
      .with("Color", () => <PaletteIcon {...iconProps} />)

      // Guide Icons
      .with("Get started", () => <FlagBannerIcon {...iconProps} />)
      .with("Theming", () => <SwatchesIcon {...iconProps} />)
      .with("Changelog", () => <LightningIcon {...iconProps} />)
      .with("GitHub", () => <GithubLogoIcon {...iconProps} />)
      .with("Twitter", () => <XLogoIcon {...iconProps} />)

      // Default case
      .otherwise((): React.ReactNode => null)
  );
}
