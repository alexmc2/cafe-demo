// components/blocks/rich-text-block.tsx
import SectionContainer from "@/components/ui/section-container";
import PortableTextRenderer from "@/components/portable-text-renderer";
import {
  getRichTextContainerClass,
  type RichTextStyleOptions,
} from "@/lib/styles/rich-text";
import { stegaClean } from "next-sanity";
import type { PortableTextBlock } from "@portabletext/types";

import type { ColorVariant, SectionPadding } from "@/sanity.types";

export type RichTextBlockProps = {
  _type: "rich-text-block";
  _key: string;
  padding?: SectionPadding | null;
  colorVariant?: ColorVariant | null;
  colorVariantDark?: ColorVariant | null;
  contentWidth?: RichTextStyleOptions["contentWidth"] | null;
  textAlign?: RichTextStyleOptions["textAlign"] | null;
  fontFamily?: RichTextStyleOptions["fontFamily"] | null;
  fontSize?: RichTextStyleOptions["fontSize"] | null;
  body?: PortableTextBlock[] | null;
};

export type RichTextContentProps = Pick<
  RichTextBlockProps,
  "body" | "contentWidth" | "textAlign" | "fontFamily" | "fontSize"
> & { context?: RichTextStyleOptions["context"] };

const sanitizeString = (value?: string | null) => {
  if (!value) {
    return undefined;
  }

  const cleaned = stegaClean(value);
  return cleaned || value;
};

export function RichTextContent({
  body,
  contentWidth,
  textAlign,
  fontFamily,
  fontSize,
  context = "standalone",
}: RichTextContentProps) {
  if (!body || body.length === 0) {
    return null;
  }

  const className = getRichTextContainerClass({
    contentWidth: sanitizeString(contentWidth) as RichTextStyleOptions["contentWidth"],
    textAlign: sanitizeString(textAlign) as RichTextStyleOptions["textAlign"],
    fontFamily: sanitizeString(fontFamily) as RichTextStyleOptions["fontFamily"],
    fontSize: sanitizeString(fontSize) as RichTextStyleOptions["fontSize"],
    context,
  });

  return (
    <div className={className}>
      <PortableTextRenderer value={body} />
    </div>
  );
}

export default function RichTextBlock({
  padding,
  colorVariant,
  colorVariantDark,
  contentWidth,
  textAlign,
  fontFamily,
  fontSize,
  body,
}: RichTextBlockProps) {
  const color = sanitizeString(colorVariant) as ColorVariant | undefined;
  const colorDark = sanitizeString(colorVariantDark) as ColorVariant | undefined;

  return (
    <SectionContainer color={color ?? undefined} colorDark={colorDark ?? undefined} padding={padding}>
      <RichTextContent
        body={body}
        contentWidth={contentWidth}
        textAlign={textAlign}
        fontFamily={fontFamily}
        fontSize={fontSize}
        context="standalone"
      />
    </SectionContainer>
  );
}
