
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

export type LenseType = {
  id: string;
  name: string;
  type: string;
  brand: string;
  value: number;
  megapixels: number;
  details: JSON;
  description: string;
};
export type AerialType = {
  id: string;
  name: string;
  type: string;
  brand: string;
  value: number;
  megapixels: number;
};

export type CameraTableType = {
  id: string;
  name: string;
  brand: string;
  price: number;
}

export type Filter = {
  type: 'camera' | 'lense' | 'aerial' | 'access';
  value: string;
};
