const LayarMemuat = () => {
  return (
    <div className="flex w-full h-screen bg-teks items-center justify-center">
      <span className="font-mono text-sm text-primer">{`${import.meta.env.VITE_NAMA_SITUS} memuat...`}</span>
    </div>
  )
    ;
};

export default LayarMemuat;
