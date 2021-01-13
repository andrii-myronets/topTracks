import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getTracks } from './store/tracks/operations';
import { Navigation } from './pages/Navigation';
import { Header } from './commons/Header';
import { Loader } from './components/Loader';

function App() {
  const dispatch = useDispatch();
  const [dataLoad, setDataLoad] = useState(false);
  
  useEffect(() => {
    dispatch(getTracks()).then(() => setDataLoad(true))
  }, [dispatch])

  return (
    <>
      <Header/>
      {dataLoad ? <Navigation /> : <Loader/>}
    </>
  );
}

export default App;
