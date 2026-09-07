import type { AnchorHTMLAttributes } from 'react';

type SafeLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/** Native anchors keep internal navigation reliable across every deployment target. */
export function SafeLink({ href, children, ...props }: SafeLinkProps) {
  return <a href={href} {...props}>{children}</a>;
}

