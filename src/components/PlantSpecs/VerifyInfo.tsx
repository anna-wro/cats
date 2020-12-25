type VerifyInfoType = {
  source: string[];
};

export default function VerifyInfo({ source }: VerifyInfoType) {
  return (
    <div className="border border-gray-light rounded-2xl p-4 flex items-center justify-between mb-8 cursor-pointer">
      <div className="flex items-center justify-center">
        <div className="bg-dark bg-opacity-60 flex items-center justify-center rounded-full h-12 w-12 mr-4 flex-shrink-0">
          <img className="w-6 h-6" src="/check-circle.svg" />
        </div>
        <div className="text-sm font-light">Zweryfikuj informacje</div>
      </div>
      <div
        className="bg-gray bg-opacity-40 hover:bg-opacity-50 rounded-full 
    flex items-center justify-center  w-4 h-4 flex-shrink-0"
      >
        {' '}
        <img className="h-2" src="/chevron-right.svg" />
      </div>
    </div>
  );
}
