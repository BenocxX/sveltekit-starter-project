import type { LayoutLoad } from './$types';
import { loadLocaleAsync } from '$lib/i18n/i18n-util.async';
import { setLocale } from '$lib/i18n/i18n-svelte';
import { detectLocale } from '$lib/i18n/i18n-util';

export const load: LayoutLoad = async (event) => {
  // Typesafe localisation with i18n
  const locale = detectLocale(() => [event.params.lang ?? '']);
  await loadLocaleAsync(locale);
  setLocale(locale);

  return event.data;
};
