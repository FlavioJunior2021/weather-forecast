import React from 'react';

import { MainComponent } from './Components/PrincipalContent/index';
import { SunsetSunriseLine } from './Components/SunsetSunriseLine/index';
import { ShowDays } from './Components/ShowDays/index';

function App(){
  return (
    <div id="App">
      <MainComponent />
      <SunsetSunriseLine />
      <ShowDays />
    </div>
  );
}

export default App;
