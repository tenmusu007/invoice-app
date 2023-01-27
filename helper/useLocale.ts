import { useRouter } from "next/router";
import translations from "../translation/text.json";

export const useLocale = () => {
	const { locale } = useRouter();
  const t = locale === "en" ? translations.en.setting : translations.jp.setting;
	return { locale, t };
};
