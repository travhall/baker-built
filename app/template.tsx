/// <reference types="react/experimental" />
import { ViewTransition } from 'react';

// template.tsx remounts on every navigation (layouts do not), so the enter and
// exit classes fire per route. The shell (topbar, nav, footer) lives in the
// layout and stays put; only the page content cross-fades.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="page-in" exit="page-out" default="none">
      {children}
    </ViewTransition>
  );
}
