import Link from 'next/link';

export default function CloseButton() {
  return (
    <Link href="/">
      <div className="flex items-center content-center bg-gray-light cursor-pointer absolute top-10 right-10 px-3 py-2 rounded-lg">
        <img className="inline mr-1" src="/close.svg" />{' '}
        <div className="text-sm text-dark">Zamknij</div>
      </div>
    </Link>
  );
}
