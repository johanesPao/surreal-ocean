import memuat from '../assets/gambar/memuat.png';

const LayarMemuat = () => {
  return (
    <div className="flex w-full h-screen bg-teks items-center justify-center">
      <div className="flex bg-primer w-1/3 h-24 rounded-lg items-center justify-center overflow-hidden">
        <div className="shrink">
          <img className="relative h-32 rounded-full -left-5 object-fit" src={memuat} />
        </div>
        <div className="flex flex-col grow">
          <text className="text-md">Surreal Ocean</text>
          <text className="font-mono text-sm">Memuat halaman...</text>
        </div>
      </div>
    </div>
  )
    ;
};

export default LayarMemuat;
