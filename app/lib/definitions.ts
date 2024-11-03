
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


export type Filter = {
  type: 'camera' | 'lense' | 'aerial' | 'access';
  value: string;
};
