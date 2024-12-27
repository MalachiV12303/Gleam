import { Camera, Lense } from "./db/schema";

export const formatCurrency = (amount: number) => {
  return (amount * 1).toLocaleString('en-US', {
    currency: 'USD',
  });
};

export const filtermap = new Map([
  ['cameratypes', ['DSLR', 'Mirrorless']],
  ['camerabrands', ['Canon', 'Nikon', 'Sony', 'Panasonic']],

  ['lensetypes', ['Telephoto Zoom', 'Standard Prime']],
  ['lensebrands', ['Canon', 'Nikon', 'Sony', 'Panasonic', 'Sigma', 'Tamron']],

  ['aerialtypes', ['Indoor', 'Outdoor', 'Both']],
  ['aerialbrands', ['DJI', 'Snaptain', 'Contixo']],

  ['resolutions', ['1080', '2160', '6144']],
  ['shutterspeeds', ['1/4000 to 30 sec', '1/8000 to 30 sec']],
  ['megapixels', ['20.9', '24.1', '24.2']],
  ['focallengths', ['-10mm','10mm-17mm', '18mm-25mm', '26mm-49mm', '50mm-69mm', '70mm-99mm', '100mm-169mm', '170mm+']],
]);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isCamera(obj: any): obj is Camera {
  return obj && typeof obj === "object" && "megapixels" in obj
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isLense(obj: any): obj is Lense {
  return obj && typeof obj === "object" && "minfl" in obj
};

