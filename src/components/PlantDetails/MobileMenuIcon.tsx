import Link from 'next/link';
import Image from 'next/image';

export default function MobileMenuIcon({
  href,
  src,
  alt,
}: {
  href: string;
  src: string;
  alt: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex flex-row items-center content-center cursor-pointer 
      bg-white hover:bg-gray-light rounded-lg px-2 py-2 outline-rounded border-1 border-gray-light"
    >
      <Image width={20} height={20} src={src} alt={alt} />
    </Link>
  );
}
