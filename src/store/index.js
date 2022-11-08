import { createStore } from 'vuex';
import coachesModule from './modules/coaches/index.js';
import coachesRequests from './modules/requests/index.js';
import authModules from './modules/auth/index.js';
const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: coachesRequests,
    auth: authModules,
  },
});
export default store;
