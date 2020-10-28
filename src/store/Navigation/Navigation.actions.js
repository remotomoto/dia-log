import { navigate as rootNavigation, goBack as rootGoBack } from '~/components/RootNavigation';

const NAVIGATE = 'NAVIGATE';
const GO_BACK = 'GO_BACK';

const navigate = (screen, params) => {
  return async (dispatch) => {
    dispatch({
      type: NAVIGATE,
      screen,
      params,
    });
    rootNavigation(screen, params);
  };
};

const goBack = () => {
  return async (dispatch) => {
    dispatch({
      type: GO_BACK,
    });
    rootGoBack();
  };
};

export { NAVIGATE, GO_BACK, navigate, goBack };
