import type { OwnerType } from 'utils/usePhoto';
import { getLicense } from 'utils/flickr';

type CreditsType = { source: string; owner: OwnerType; license: string };

export default function Credits({ source, owner, license }: CreditsType) {
  const licenseInfo = getLicense(license);
  return (
    <div className="block self-end text-gray text-xs mt-4">
      <a href={source} className="hover:underline">
        Zdjęcie
      </a>
      :{' '}
      <a
        href={`https://flickr.com/people/${owner.path_alias ?? owner.nsid}/`}
        className="hover:underline"
      >
        {owner.realname !== '' ? owner.realname : owner.username}
      </a>{' '}
      /{' '}
      <a href={licenseInfo.link} className="hover:underline">
        {licenseInfo.name}
      </a>
    </div>
  );
}
