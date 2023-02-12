import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
  return {
    apples: parseInt(event.params.amount),
  };
};
