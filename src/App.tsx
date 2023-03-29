import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import RootNavigationStack from "./navigation/rootNavigation";
import { appStore } from "./store/store"
import persistStore from "redux-persist/es/persistStore"

const App = () => {
    const persistor = persistStore(appStore);

    return (
        <Provider store={appStore}>
            <PersistGate loading={false} persistor={persistor}>
                <RootNavigationStack />
            </PersistGate>
        </Provider>
    )
}

export default App;