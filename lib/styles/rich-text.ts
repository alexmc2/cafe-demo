// lib/styles/rich-text.ts
import { cn } from "@/lib/utils";

type RichTextWidth = "narrow" | "default" | "wide" | "full";
type RichTextAlign = "left" | "center" | "right" | "justify";
type RichTextFontFamily = "sans" | "display" | "serif" | "mono";
type RichTextFontSize = "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

export type RichTextStyleOptions = {
  contentWidth?: RichTextWidth;
  textAlign?: RichTextAlign;
  fontFamily?: RichTextFontFamily;
  fontSize?: RichTextFontSize;
  context?: "standalone" | "inline";
};

const widthClassMap: Record<RichTextWidth, string> = {
  narrow: "max-w-prose",
  default: "max-w-3xl",
  wide: "max-w-5xl",
  full: "max-w-none",
};

const textAlignClassMap: Record<RichTextAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

const fontFamilyClassMap: Record<RichTextFontFamily, string> = {
  sans: "font-sans",
  display: "font-[var(--font-display)]",
  serif: "font-serif",
  mono: "font-mono",
};

const fontSizeClassMap: Record<RichTextFontSize, string> = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
};

export const getRichTextContainerClass = ({
  contentWidth = "default",
  textAlign = "left",
  fontFamily = "sans",
  fontSize = "base",
  context = "standalone",
}: RichTextStyleOptions = {}) => {
  const widthClass = widthClassMap[contentWidth] ?? widthClassMap.default;
  const textAlignClass = textAlignClassMap[textAlign] ?? textAlignClassMap.left;
  const fontFamilyClass =
    fontFamilyClassMap[fontFamily] ?? fontFamilyClassMap.sans;
  const fontSizeClass = fontSizeClassMap[fontSize] ?? fontSizeClassMap.base;

  const shouldCenter = context === "standalone" && contentWidth !== "full";

  return cn(
    "flex w-full flex-col gap-6 leading-relaxed",
    widthClass,
    fontFamilyClass,
    fontSizeClass,
    textAlignClass,
    shouldCenter ? "mx-auto" : undefined
  );
};
