import "./global.css"
import { Provider } from 'react-redux';
import AppNavigation from './src/navigation/navigators/navigation';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { store } from "./src/store";
function App() {
  return (
    <SafeAreaProvider >
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
