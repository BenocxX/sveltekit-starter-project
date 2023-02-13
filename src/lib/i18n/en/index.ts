import type { BaseTranslation } from '../i18n-types';

// For more informations: https://blog.encodeart.dev/typesafe-i18n-with-sveltekit
const en = {
  HELLO: 'Hello {name:string}!',
} satisfies BaseTranslation;

export default en;
