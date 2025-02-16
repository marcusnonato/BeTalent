import React, {useEffect} from 'react';
import Home from './app/screens/Home';
import BootSplash from 'react-native-bootsplash';

function App(): React.JSX.Element {
  useEffect(() => {
    const init = async () => {};

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  return <Home />;
}

export default App;
