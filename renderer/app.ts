import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";

import PageShell from "./PageShell.vue";
// import { setPageContext } from "./usePageContext";
import type { PageContext } from "./types";

export { createApp };

function createApp(pageContext: PageContext) {
  const { Page, pageProps } = pageContext;

  Vue.use(VueCompositionAPI);

  return new Vue({
    render: (h) => h(PageShell, {}, [h(Page, { props: pageProps || {} })]),
  });

  // Make `pageContext` available from any Vue component
  // setPageContext(app, pageContext);

}
