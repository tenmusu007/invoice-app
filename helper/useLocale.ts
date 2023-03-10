import { useRouter } from 'next/router';
export const useLocale = (props: any) => {
  const { locale } = useRouter();
  const t = locale === 'en' ? props.en : props.jp;
  return { locale, t };
};
