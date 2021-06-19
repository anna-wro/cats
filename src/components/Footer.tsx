import copy from "consts/copy";

export default function Footer() {
  return (
    <div className="bg-dark w-full py-16">
      <div className="max-w-7xl mx-auto px-20 text-gray-light text-center font-bold">
        {copy.footer}
      </div>
    </div>
  );
}
