import React, { PropTypes } from 'react';
import { ProgressBar } from 'react-toolbox';
//import { Box, Flex } from 'reflexbox';

const FullscreenLoader = ({ delay = 0 }) => (
		<div style={{'width': '150px', 'height': '150px', 'margin': '20% auto'}} >
      <ProgressBar type='circular' mode='indeterminate' multicolor />
		</div>
);

FullscreenLoader.propTypes = {
  delay: PropTypes.number
};

export default FullscreenLoader;
