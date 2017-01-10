import Profile from './Profile';
import reducer from './reducer';
import * as selectors from './selectors';
import * as actions from './actions';
import * as sagas from './sagas';

const components = {
    Profile
};

export { actions, components, reducer, sagas, selectors };
