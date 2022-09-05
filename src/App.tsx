import React from 'react';
import { Layout } from 'layout/Layout';
import { Routers } from 'routes/Routers';
import { IAppContext } from 'interfaces';
import { BrowserRouter } from 'react-router-dom';
import { TouchHandler } from 'utils/TouchHandler';

export const AppContext = React.createContext<IAppContext>({isClicked: false, toggleClicked: () => {}});

const App = () => {
  const [isClicked, setIsClicked] = React.useState(false);

  const toggleClicked = (flag) => {
    setIsClicked(flag ?? !isClicked);
  };

  return (
    <AppContext.Provider value={{ isClicked, toggleClicked }}>
      <BrowserRouter>
      <TouchHandler touchLength={10}>
        <Layout>
          <Routers />
        </Layout>
        </TouchHandler>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export { App };
