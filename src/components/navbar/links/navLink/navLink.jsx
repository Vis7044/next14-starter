'use client';
import Link from 'next/link';
import styles from './navLink.module.css';
import { usePathname } from 'next/navigation';

function NavLink({ item }) {
  const path = usePathname();
  return (
    <Link
      href={item.path}
      className={`${styles.container} 
        ${path === item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
}

export default NavLink;
