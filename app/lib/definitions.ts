
export type CameraType = {
  id: string;
  name: string;
  type: string;
  brand: string;
  value: number;
  megapixels: number;
};
export type LenseType = {
  id: string;
  name: string;
  type: string;
  brand: string;
  value: number;
  minfocal: string;
  maxfocal: string;
}

export type ItemList = {
  cameras: CameraType[] | '';
  lenses: LenseType[] | '';
};

export type CameraTableType = {
  id: string;
  name: string;
  brand: string;
  price: number;
}

export type CamerasDetail = {
  id: string;
  name: string;
  type: string;
  brand: string;
  megapixels: number;
  price: number;
};

export type Filter = {
  type: 'camera' | 'lense' | 'aerial' | 'access';
  value: string;
};

export type ItemsTableType = {
  itemtype: 'camera' | 'lense' | 'aerial' | 'access' | '';
  id: string;
  name: string;
  type: string;
  brand: string;
  price: number;
};