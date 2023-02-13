import type { LayoutServerLoad } from './$types';
import { detectLocale } from '$lib/i18n/i18n-util';
import { redirect } from '@sveltejs/kit';

const langParam = 'lang';

export const load: LayoutServerLoad = async (event) => {
  // Cookie based localisation
  const newLocale = event.url.searchParams.get(langParam);
  if (newLocale) {
    event.cookies.set(langParam, newLocale, { path: '/' });
    event.url.searchParams.delete(langParam);
    throw redirect(303, event.url.toString());
  }

  const locale = detectLocale(() => [event.cookies.get(langParam) ?? '']);
  return { locale };
};
