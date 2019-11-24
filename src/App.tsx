import React, { lazy, Suspense} from 'react';
import './App.css';
import { importMDX } from 'mdx.macro';

const Content = lazy(() => importMDX('./Content.mdx'));

const App: React.FC = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Content />
      </Suspense>
    </div>
  );
}

export default App;
