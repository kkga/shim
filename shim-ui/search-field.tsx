"use client";

import {
  FunnelSimpleIcon,
  MagnifyingGlassIcon,
  XIcon,
} from "@phosphor-icons/react";
import {
  Button as RacButton,
  SearchField as RacSearchField,
  type SearchFieldProps as RacSearchFieldProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import {
  Description,
  FieldError,
  FieldGroup,
  type FieldProps,
  fieldLayoutStyle,
  GroupInput,
  Label,
} from "@/shim-ui/field";
import { cxRenderProps } from "@/shim-ui/lib/style";
import { Theme, useThemeProps } from "@/shim-ui/lib/theme";

const style = tv({
  slots: {
    iconContainer: "pointer-events-none flex items-center justify-center",
    icon: "",
    clearButtonContainer: "flex items-center justify-center",
    clearButton:
      "flex items-center justify-center bg-transparent text-neutral-text data-hovered:bg-neutral-bg-hover data-pressed:bg-neutral-bg-active",
  },
  variants: {
    size: {
      1: {
        iconContainer: "size-6",
        icon: "size-4",
        clearButtonContainer: "size-6",
        clearButton: "size-5 rounded-xs",
      },
      2: {
        iconContainer: "size-7",
        icon: "size-4",
        clearButtonContainer: "size-7",
        clearButton: "size-5 rounded-xs",
      },
      3: {
        iconContainer: "size-8",
        icon: "size-4",
        clearButtonContainer: "size-8",
        clearButton: "size-6 rounded-xs",
      },
      4: {
        iconContainer: "size-10",
        icon: "size-5",
        clearButtonContainer: "size-10",
        clearButton: "size-7 rounded-[3px]",
      },
    },
    isEmpty: {
      true: {
        iconContainer: "text-neutral-text-subtle",
        clearButtonContainer: "hidden",
      },
      false: { iconContainer: "text-neutral-text" },
    },
    isDisabled: {
      true: {
        clearButton: "text-neutral-text-subtle",
      },
    },
  },
});

interface SearchFieldProps extends RacSearchFieldProps, FieldProps {
  prefixIcon?: "search" | "filter" | React.ReactNode | null;
}

function SearchField({
  label,
  description,
  errorMessage,
  placeholder = "Search",
  prefixIcon = "search",
  ...props
}: SearchFieldProps) {
  let themeProps = useThemeProps({ ...props, fieldVariant: props.variant });
  let { labelPosition, size } = themeProps;
  let { clearButtonContainer, clearButton, iconContainer, icon } = style({
    size,
  });

  return (
    <RacSearchField
      {...props}
      className={cxRenderProps(
        props.className,
        fieldLayoutStyle({ labelPosition })
      )}
    >
      {({ isEmpty, isDisabled }) => (
        <Theme {...themeProps}>
          {label && <Label>{label}</Label>}
          <FieldGroup>
            {prefixIcon && (
              <div aria-hidden className={iconContainer({ isEmpty })}>
                {(() => {
                  if (prefixIcon === "search") {
                    return <MagnifyingGlassIcon className={icon()} />;
                  }
                  if (prefixIcon === "filter") {
                    return <FunnelSimpleIcon className={icon()} />;
                  }
                  return prefixIcon;
                })()}
              </div>
            )}
            <GroupInput
              className={prefixIcon ? "indent-0" : undefined}
              placeholder={placeholder}
            />
            <div className={clearButtonContainer({ isEmpty })}>
              <RacButton className={clearButton({ isDisabled })}>
                <XIcon aria-hidden size={16} />
              </RacButton>
            </div>
          </FieldGroup>
          {description && <Description>{description}</Description>}
          <FieldError>{errorMessage}</FieldError>
        </Theme>
      )}
    </RacSearchField>
  );
}

export { SearchField, type SearchFieldProps };
