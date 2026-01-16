import type {
  // ButtonTheme as ButtonThemeFlowbite,
  ModalTheme as ModalThemeFlowbite,
} from "flowbite-react";

export const ModalTheme = {
  content: {
    base: "relative h-auto w-full p-4 md:h-auto",
    inner:
      "relative flex max-h-[90dvh] flex-col rounded-lg bg-appa-blue-light shadow",
  },
} as ModalThemeFlowbite;

export const ButtonTheme = {
  color: {
    bone: "bg-appa-blue hover:bg-appa-blue-light text-appa-primary",
  },
};

// internal colors
export const InternalColors = {
  primary: "rgb(59, 36, 36)",
  secondary: "rgb(255, 195, 150)",
  orange: "rgb(255, 115, 64)",
  yellow: "rgb(246, 183, 59)",
  purple: "rgb(210, 164, 215)",
  beige: "rgb(243, 224, 190)",
};
