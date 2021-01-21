import * as React from 'react';
import type { ValidateMessages } from 'rc-field-form/lib/interface';
import devWarning from '../_util/devWarning';

import type { ModalLocale } from '../modal/locale';
import { changeConfirmLocale } from '../modal/locale';
import type { TransferLocale as TransferLocaleForEmpty } from '../empty';
import type { PaginationLocale } from '../pagination/Pagination';
import type { TableLocale } from '../table/interface';
import type { PopconfirmLocale } from '../popconfirm';
import type { UploadLocale } from '../upload/interface';
import type { TransferLocale } from '../transfer';
import type { PickerLocale as DatePickerLocale } from '../date-picker/generatePicker';
import LocaleContext from './context';

export const ANT_MARK = 'internalMark';

export interface Locale {
  locale: string;
  Pagination?: PaginationLocale;
  DatePicker?: DatePickerLocale;
  TimePicker?: Object;
  Calendar?: Object;
  Table?: TableLocale;
  Modal?: ModalLocale;
  Popconfirm?: PopconfirmLocale;
  Transfer?: Partial<TransferLocale>;
  Select?: Object;
  Upload?: UploadLocale;
  Empty?: TransferLocaleForEmpty;
  global?: Object;
  PageHeader?: Object;
  Icon?: Object;
  Text?: Object;
  Form?: {
    optional?: string;
    defaultValidateMessages: ValidateMessages;
  };
  Image?: {
    preview: string;
  };
}

export interface LocaleProviderProps {
  locale: Locale;
  children?: React.ReactNode;
  _ANT_MARK__?: string;
}

export default class LocaleProvider extends React.Component<LocaleProviderProps, any> {
  static defaultProps = {
    locale: {},
  };

  constructor(props: LocaleProviderProps) {
    super(props);
    changeConfirmLocale(props.locale && props.locale.Modal);

    devWarning(
      props._ANT_MARK__ === ANT_MARK,
      'LocaleProvider',
      '`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale',
    );
  }

  componentDidUpdate(prevProps: LocaleProviderProps) {
    const { locale } = this.props;
    if (prevProps.locale !== locale) {
      changeConfirmLocale(locale && locale.Modal);
    }
  }

  componentWillUnmount() {
    changeConfirmLocale();
  }

  render() {
    const { locale, children } = this.props;

    return (
      <LocaleContext.Provider value={{ ...locale, exist: true }}>{children}</LocaleContext.Provider>
    );
  }
}
