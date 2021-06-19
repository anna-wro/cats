import copy from 'consts/copy';

export default function Title() {
  return (
    <h1 className="hidden md:block title line absolute -top-12 font-title font-semibold text-5xl w-40">
      {copy.title}
    </h1>
  );
}
