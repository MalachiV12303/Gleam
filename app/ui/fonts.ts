import { Raleway, PT_Sans, Bona_Nova, Inconsolata } from 'next/font/google';

export const raleway = Raleway({
  weight: ['400', '700'],
  subsets: ['latin'],
  //style: ['normal', 'italic'] //not sure is this will be necessary
});

export const ptsans = PT_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const bnova = Bona_Nova({
  weight: ['400'],
  subsets: ['latin'],
});

export const inc = Inconsolata({
  weight: ['300'],
  subsets: ['latin'],
});