import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <ul className="flex justify-center items-center pt-4">
        <li>
          <Link href="/">
            <a className="font-bold text-green-500 no-underline">Rośliny</a>
          </Link>
          <span className="inline-block mx-2 text-gray">•</span>
        </li>
        <li>
          <Link href="/blog">
            <a className="font-bold text-gray no-underline">Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
