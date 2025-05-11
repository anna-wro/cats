import Link from 'next/link';
import { useRouter } from 'next/router';
import { copy } from 'consts/copy';

const links = [
  {
    href: '/',
    label: copy.mainPageNav,
  },
  {
    href: '/blog',
    label: copy.blogPageNav,
  },
];

export default function Nav() {
  const { asPath } = useRouter();

  return (
    <nav>
      <ul className="flex justify-center items-center pt-4">
        {links.map(link => (
          <li key={link.href} className="nav-link px-3 relative">
            <Link
              href={link.href}
              className={`font-bold no-underline ${
                asPath === link.href ? 'text-dark' : 'text-gray'
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
