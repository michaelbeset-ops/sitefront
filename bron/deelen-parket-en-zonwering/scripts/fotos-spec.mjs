// Eén bron van waarheid voor alle fotovlakken: de site (src/components/Foto.astro)
// en het downloadscript lezen allebei deze lijst, zodat maten nooit uit elkaar lopen.
// Bestandsnamen: <naam>.jpg is de grootste breedte, <naam>-<breedte>.jpg de kleinere.
export const fotos = {
  hero:          { w: 2400, h: 1600, breedtes: [1200, 2400], tint: '#3b2718' },
  'vloer-1':     { w: 2000, h: 860,  breedtes: [1000, 2000], tint: '#d9b98c' },
  'zonwering-1': { w: 2000, h: 860,  breedtes: [1000, 2000], tint: '#4a3220' },
  'renovatie-1': { w: 1200, h: 900,  breedtes: [600, 1200],  tint: '#d9b98c' },
  'renovatie-2': { w: 1200, h: 900,  breedtes: [600, 1200],  tint: '#e9d9bf' },
  showroom:      { w: 1400, h: 1050, breedtes: [700, 1400],  tint: '#d9b98c' },
};

export const bestand = (naam, breedte) => {
  const max = Math.max(...fotos[naam].breedtes);
  return breedte === max ? `${naam}.jpg` : `${naam}-${breedte}.jpg`;
};
