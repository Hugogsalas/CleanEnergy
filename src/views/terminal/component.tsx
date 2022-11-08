import React, {FC} from 'react';
import {Box, Text} from 'native-base';
import {terminalProps as Props} from '../../containers/terminal/types';

const Terminal: FC<Props> = ({write}) => {
  return (
    <Box flex="1" alignItems="center" justifyContent="center" bg="primary.900">
      <Text>{write('title')}</Text>
    </Box>
  );
};

export default Terminal;
