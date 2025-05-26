import { CodeXml, Facebook, Instagram, LineChart, School, X } from 'lucide-react';
import React from 'react'

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <CodeXml />
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://instagram.com/muthiamaylaa">
          <Instagram />
        </a>
        <a href="https://x.com/keugisaki">
          <X />
        </a>
        <a href="https://https://lms1.polsri.ac.id/login/index.php">
          <School />
        </a>
      </nav>
    </footer>
  );
}

export default Footer