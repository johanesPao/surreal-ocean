// Fungsi untuk cek apakah variabel undefined
export const undef = (variabel: any) => {
  return typeof variabel === "undefined";
};

// Fungsi untuk proper string
export const properString = (teks: string) => {
  return teks.split(" ").map((kata: string) => {
    return kata.length > 1
      ? kata[0].toUpperCase() + kata.slice(1).toLowerCase()
      : kata;
  });
};
