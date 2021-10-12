import { lazy, Suspense } from 'react';
import { Context } from '../data/Context';

const Main = lazy(() => import('./Main').then(module => ({default:module.Main})));

function App() {

  return (
    <div className="App">
      
      <Suspense fallback={<h1>Loading...</h1>}>

        <Context.Provider value={{}}>
          <Main/>
        </Context.Provider>

      </Suspense>

    </div>
  );
}

export default App;
