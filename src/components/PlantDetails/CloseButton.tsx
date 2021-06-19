import Link from 'next/link';
import Image from 'next/image';

export default function CloseButton({ small }: { small?: boolean }) {
  return (
    <Link href="/">
      {small ? (
        <a
          href="/"
          className="flex items-center content-center cursor-pointer 
        bg-white hover:bg-gray-light rounded-full
        absolute top-2 right-2 px-2 py-2 z-10 "
        >
          <Image width={16} height={16} src="/close.svg" alt="Zamknij" />
        </a>
      ) : (
        <a
          href="/"
          className="flex items-center content-center cursor-pointer
       bg-gray-light bg-opacity-30 hover:bg-opacity-40 rounded-lg  
       absolute top-10 right-8 px-3 py-2"
        >
          <Image
            width={16}
            height={16}
            className="inline"
            src="/close.svg"
            alt="Zamknij"
          />
          <div className="ml-1 text-sm text-dark">Zamknij</div>
        </a>
      )}
    </Link>
  );
}
