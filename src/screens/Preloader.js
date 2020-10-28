import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import Loading from '~/components/Loading';
import { themes } from '~/components/styles/common';

const Preloader = ({ user, children }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (_.isNil(user)) {
      setIsReady(true);
    }
  }, [user]);

  if (!isReady) {
    return <Loading theme={themes.white} />;
  }

  return children;
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  user: state.user.info,
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Preloader);
