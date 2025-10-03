"use client";

// components/demo/DemoPromoBanner.tsx
import Link from "next/link";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const DEFAULT_MESSAGE = "October pilot: £150 · 48-hour launch · No payment until live";
const DEFAULT_LINK = {
  href: "/demo",
  label: "How it works",
} as const;

export type DemoPromoBannerProps = {
  message?: string;
  linkHref?: string;
  linkLabel?: string;
  color?: string;
  isEnabled?: boolean;
  className?: string;
};

export function DemoPromoBanner({
  message = DEFAULT_MESSAGE,
  linkHref = DEFAULT_LINK.href,
  linkLabel = DEFAULT_LINK.label,
  color,
  isEnabled = true,
  className,
}: DemoPromoBannerProps) {
  const bannerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isEnabled) {
      document.documentElement.style.removeProperty("--promo-banner-height");
      return;
    }

    const root = document.documentElement;

    const updateHeight = () => {
      const height = bannerRef.current?.offsetHeight ?? 0;
      if (height > 0) {
        root.style.setProperty("--promo-banner-height", `${height}px`);
      } else {
        root.style.removeProperty("--promo-banner-height");
      }
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
      root.style.removeProperty("--promo-banner-height");
    };
  }, [isEnabled, message, linkHref, linkLabel]);

  if (!isEnabled) {
    return null;
  }

  const backgroundColor = color?.trim().length ? color : undefined;

  const link = linkHref?.trim().length ? linkHref : undefined;

  return (
    <div
      ref={bannerRef}
      className={cn(
        "relative z-40 flex w-full items-center justify-center bg-[var(--primary)] dark:bg-sky-600 px-4 py-2 text-center text-xs font-medium text-white shadow-sm md:text-sm",
        className
      )}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <span className="leading-tight">
        {message}
        {link && (
          <>
            {" "}
            <Link href={link} className="underline">
              {linkLabel}
            </Link>
          </>
        )}
      </span>
    </div>
  );
}

export default DemoPromoBanner;
