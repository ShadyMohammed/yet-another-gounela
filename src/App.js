import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { GlobalStyles } from './theme';

import Header from './components/Header';
import WizardForm from './components/WizardForm';
import { theme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Header />
        <WizardForm />
      </div>
    </ThemeProvider>
  );
};

export default App;
