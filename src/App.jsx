import React from 'react';
import ReactDOM from 'react-dom';
import { ActivityFeedPage } from "./pages/ActivityFeedPage"
import { ActivityFeedProvider } from './contexts';

import { Header, Footer } from './components';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <ActivityFeedProvider>
        <ActivityFeedPage />
      </ActivityFeedProvider>
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
