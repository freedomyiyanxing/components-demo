import React from 'react';
import Button from './components/Button/button';
import Snackbar from './components/Snackbar/snackbar';

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = (): void => {
    setOpen(!open);
  };

  return (
    <div className="App">
      <div>
        <Button>default</Button>
        <Button disabled>disabled</Button>
        <Button btnType="primary" onClick={handleClick}>
          primary
        </Button>
        <Button btnType="danger">danger</Button>
        <Button btnType="link" href="https://bomman.com">
          primary
        </Button>
      </div>
      <Snackbar open={open} />
      <header className="App-header">测试2222</header>
    </div>
  );
};

export default App;
