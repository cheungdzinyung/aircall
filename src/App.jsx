import React from 'react';
import ReactDOM from 'react-dom';
import { ActivityFeedPage } from "./pages/ActivityFeedPage"

import { Header, Footer } from './components';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <ActivityFeedPage />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
