import Link from 'next/link';

export default function CloseButton() {
  return (
    <Link href="/">
      <div
        className="flex items-center content-center cursor-pointer
       bg-gray-light bg-opacity-30 hover:bg-opacity-40 rounded-lg  
       absolute top-10 right-8 px-3 py-2"
      >
        <img className="inline mr-1" src="/close.svg" />{' '}
        <div className="text-sm text-dark">Zamknij</div>
      </div>
    </Link>
  );
}
