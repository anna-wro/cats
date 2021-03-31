import Link from 'next/link';

export default function CloseButton({ small }: { small?: boolean }) {
  return (
    <Link href="/">
      {small ? (
        <div
          className="flex items-center content-center cursor-pointer 
        bg-white hover:bg-gray-light rounded-full
        absolute top-2 right-2 px-2 py-2 z-10 "
        >
          <img src="/close.svg" />
        </div>
      ) : (
        <div
          className="flex items-center content-center cursor-pointer
       bg-gray-light bg-opacity-30 hover:bg-opacity-40 rounded-lg  
       absolute top-10 right-8 px-3 py-2"
        >
          <img className="inline mr-1" src="/close.svg" />{' '}
          <div className="text-sm text-dark">Zamknij</div>
        </div>
      )}
    </Link>
  );
}
