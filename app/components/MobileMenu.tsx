"use client";

import type { MouseEvent, ReactNode } from "react";

export function MobileMenu({ children }: { children: ReactNode }) {
  function closeAfterNavigation(event: MouseEvent<HTMLElement>) {
    if (event.target instanceof Element && event.target.closest("a")) {
      event.currentTarget.closest("details")?.removeAttribute("open");
    }
  }

  return (
    <details className="mobile-menu">
      <summary aria-label="Open navigation">
        <span />
        <span />
      </summary>
      <nav aria-label="Mobile navigation" onClick={closeAfterNavigation}>
        {children}
      </nav>
    </details>
  );
}
