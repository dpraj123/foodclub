import "./global.css"
import AppNavigation from './src/navigation/navigators/navigation';
import { SafeAreaProvider } from "react-native-safe-area-context";
function App() {
  return (
    <SafeAreaProvider>
        <AppNavigation />
    </SafeAreaProvider>
  );
}

export default App;
