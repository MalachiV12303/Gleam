export type ItemType = {
  id: string;
  name: string;
  type: string;
  brand: string;
  value: number;
  details: JSON;
  description: string | null;
};


export type CameraDetail = {
  id: string;
  name: string;
  type: string;
  brand: string;
  value: number;
  megapixels: number;
  res: number;
  shutter: string;
  sd: string[];
  lens: string[];
  description: string;
};

export type LenseDetail = {
  id: string;
  name: string;
  type: string;
  brand: string;
  value: number;
  minfl: number;
  maxfl: number;
  maxap: string;
  mount: string[];
};


export type Filter = {
  type: 'camera' | 'lense' | 'aerial' | 'access';
  value: string;
};
