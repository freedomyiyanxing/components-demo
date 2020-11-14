import React from 'react';
import Button from './components/Button/button';

const App: React.FC = () => {
  return (
    <div className="App">
      <div>
        <Button>default</Button>
        <Button disabled>disabled</Button>
        <Button btnType="primary">primary</Button>
        <Button btnType="danger">danger</Button>
        <Button btnType="link" href="https://bomman.com">
          primary
        </Button>
      </div>
      <header className="App-header">测试2222</header>
    </div>
  );
};

export default App;
