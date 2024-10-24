import { Raleway, PT_Sans } from 'next/font/google';

export const raleway = Raleway({
  weight: ['400', '700'],
  subsets: ['latin'],
  //style: ['normal', 'italic'] //not sure is this will be necessary
});

export const ptsans = PT_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
});