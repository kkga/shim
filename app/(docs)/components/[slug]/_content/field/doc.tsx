import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      demo: {
        group: "field",
        name: "main",
      },
    },
    {
      title: "Theme variants",
      description: (
        <p>
          Showcase how fields adapt to different theme variants using the
          provided tokens.
        </p>
      ),
      demo: {
        group: "field",
        name: "theme-variant",
      },
      className: "flex flex-row gap-4",
      code: "theme-variant",
      stacked: true,
    },
    {
      title: "Theme label position",
      description: (
        <p>
          Display label placement options across the theme to ensure consistency
          on any surface.
        </p>
      ),
      demo: {
        group: "field",
        name: "theme-label-position",
      },
      className: "flex flex-row gap-4",
      code: "theme-label-position",
      stacked: true,
    },
    {
      title: "Theme size",
      description: (
        <p>
          Compare the available field sizes to confirm spacing and ergonomics
          within the design system.
        </p>
      ),
      demo: {
        group: "field",
        name: "theme-size",
      },
      className: "grid grid-cols-2 gap-4",
      code: "theme-size",
      stacked: true,
    },
  ],
} satisfies DocModule;
