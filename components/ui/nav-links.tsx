import React from "react";
import Link from "next/link";

export const NavLinks = () => {
  return (
    <div className="w-full flex items-center justify-end gap-4 mb-20 text-muted-foreground text-sm">
      <Link
        href={"https://github.com/zecod"}
        target="_blank"
        className="hover:text-primary transition-all"
      >
        Github,
      </Link>
      <Link
        href={"https://it.linkedin.com/in/yasinel"}
        target="_blank"
        className="hover:text-primary transition-all"
      >
        LinkedIn
      </Link>
    </div>
  );
};
