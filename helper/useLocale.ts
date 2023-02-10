import { useRouter } from "next/router";
// import translations from "../translation/text.json";

export const useLocale = (props:any) => {
	const { locale } = useRouter();
  const t = locale === "en" ? props.en : props.jp;
	return { locale, t };
};
