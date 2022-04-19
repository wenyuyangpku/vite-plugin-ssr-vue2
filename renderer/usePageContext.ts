// Hook `usePageContext()` to make `pageContext` available from any Vue component.
// See https://vite-plugin-ssr.com/pageContext-anywhere

import { PageContext } from './types';
import { provide, inject } from '@vue/composition-api';

export { usePageContext };
export { setPageContext };

const key = Symbol();

function usePageContext() {
  return inject(key);
}

function setPageContext(pageContext: PageContext) {
  provide(key, pageContext);
}
