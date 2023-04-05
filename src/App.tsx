import { AppState, Text, View } from "react-native";
import { useEffect, useRef, useState } from "react";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import RootNavigationStack from "./navigation/rootNavigation";
import { appStore } from "./store/store"
import persistStore from "redux-persist/es/persistStore"

const App = () => {
    const persistor = persistStore(appStore);

    const [appState, setAppState] = useState(AppState.currentState);

    useEffect(() => {
        const subscription = AppState.addEventListener('change', (nextAppState) => {
            console.log('App State: ' + nextAppState);
            setAppState(nextAppState);
        });
        return () => {
            subscription.remove()
        };
    }, []);

    if (appState === 'active') {

        return (
            <Provider store={appStore}>
                <PersistGate loading={false} persistor={persistor}>
                    <RootNavigationStack />
                </PersistGate>
            </Provider>
        )

    } else {
        return (
            // Security screen 
            <View>
                <Text>Security Screen </Text>
            </View>
        )
    }


}

export default App;