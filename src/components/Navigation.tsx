import Link from 'next/link';
import { useRouter } from 'next/router';

const links = [
  {
    href: '/',
    label: 'Rośliny',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
];

export default function Nav() {
  const { asPath } = useRouter();

  return (
    <nav>
      <ul className="flex justify-center items-center pt-4">
        {links.map(link => (
          <li key={link.href} className="nav-link px-3 relative">
            <Link href={link.href}>
              <a
                className={`font-bold no-underline ${
                  asPath === link.href ? 'text-dark' : 'text-gray'
                }`}
              >
                {link.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
