import React, { useEffect } from 'react';
// import button from '@material-ui/core/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';

function Sneakbar(props) {
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    let status = props.data.data.type
    if (status) {
      console.log(status)
      enqueueSnackbar('This is a success message!', {  variant: status });
    }

  })
  const handleClick = () => {
    enqueueSnackbar('I love snacks.');
  };

  const handleClickVariant = (variant) => () => {
    console.log(variant)
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('This is a success message!', { variant });
  };

  return (
    <React.Fragment>
      <button onClick={handleClick}>Show snackbar</button>
      <button onClick={handleClickVariant('success')}>Show success snackbar</button>
    </React.Fragment>
  );
}

export default function IntegrationNotistack(data) {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      <Sneakbar data={data} />
    </SnackbarProvider>
  );
}
