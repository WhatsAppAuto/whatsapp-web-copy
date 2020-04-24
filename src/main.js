import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./config/index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faEllipsisV,
  faPaperPlane,
  faMicrophone,
  faSmile,
  faCog,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from "@fortawesome/vue-fontawesome";

library.add(
  faSearch,
  faEllipsisV,
  faPaperPlane,
  faMicrophone,
  faSmile,
  faCog,
  faPlus
);

Vue.config.productionTip = false;

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
