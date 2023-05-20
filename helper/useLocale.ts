import { useRouter } from 'next/router';

const useLocale = (props: any) => {
  const { locale } = useRouter();
  const t = locale === 'en' ? props.en : props.jp;
  return { locale, t };
};

export default useLocale;