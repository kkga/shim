import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
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
      className: "gap-4",
      code: "theme-variant",
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
      className: "gap-4",
      code: "theme-label-position",
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
      className: "gap-4",
      code: "theme-size",
    },
  ],
} satisfies DocModule;
