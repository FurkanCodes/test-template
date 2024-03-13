import React, { ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import { useLocaleContext } from 'src/context/AppContextProvider/LocaleContextProvider';
import { IntlGlobalProvider } from 'src/helpers/Common';
import AppLocale from 'src/services/localization';


interface AppLocaleProviderProps {
  children: ReactNode;
}

const AppLocaleProvider: React.FC<AppLocaleProviderProps> = (props) => {
  const { locale } = useLocaleContext();
  const currentAppLocale = AppLocale[locale.locale];

  return (
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}
    >
      <IntlGlobalProvider>{props.children}</IntlGlobalProvider>
    </IntlProvider>
  );
};

export default AppLocaleProvider;
