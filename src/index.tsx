import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from "react-redux";
import App from "./App";

import { configureStore } from "./configureStore";

import { addLocaleData, IntlProvider } from "react-intl";
import en from "react-intl/locale-data/en";
import ru from "react-intl/locale-data/ru";
import messages_en from "./assets/translations/en.json";
import messages_ru from "./assets/translations/ru.json";

type Messages = { [ key: string ]: any };

// configure localization
addLocaleData([...en, ...ru]);

const messages: Messages = {
    "ru": messages_ru,
    "en": messages_en
};

// language without region code
const language = navigator.language.split(/[-_]/)[0];

// configure store and epics
const store = configureStore();

ReactDOM.render(

  <IntlProvider
    locale={language}
    messages={messages[language]}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </IntlProvider>,
  document.getElementById("root")
);
