import React from 'react';
// import classNames from 'classnames';

interface SnackbarProps {
  open: boolean;
}

const Snackbar: React.FC<SnackbarProps> = (props) => {
  const { open } = props;
  const [openState, setOpenState] = React.useState(open);

  React.useEffect(() => {
    setOpenState(open);
  }, [open]);

  return <div className="snackbar-container">{openState ? <div className="snackbar-content">哈哈哈</div> : null}</div>;
};

export default Snackbar;
