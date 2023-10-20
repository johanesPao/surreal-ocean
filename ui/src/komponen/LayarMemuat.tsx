const LayarMemuat = () => {
  return (
    <div className="flex w-full h-screen bg-primer items-center justify-center">
      <span className="font-mono text-sm text-teks">{`${import.meta.env.VITE_NAMA_SITUS} memuat...`}</span>
    </div>
  )
    ;
};

export default LayarMemuat;
