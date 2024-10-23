
export type CameraType = {
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
