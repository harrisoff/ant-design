import * as React from 'react';
import Radio from './radio';
import type { RadioChangeEvent } from './interface';
import type { AbstractCheckboxProps } from '../checkbox/Checkbox';
import { ConfigContext } from '../config-provider';
import RadioGroupContext from './context';

export type RadioButtonProps = AbstractCheckboxProps<RadioChangeEvent>;

const RadioButton = (props: RadioButtonProps, ref: React.Ref<any>) => {
  const radioGroupContext = React.useContext(RadioGroupContext);
  const { getPrefixCls } = React.useContext(ConfigContext);

  const { prefixCls: customizePrefixCls, ...radioProps } = props;
  const prefixCls = getPrefixCls('radio-button', customizePrefixCls);
  if (radioGroupContext) {
    radioProps.checked = props.value === radioGroupContext.value;
    radioProps.disabled = props.disabled || radioGroupContext.disabled;
  }
  return <Radio prefixCls={prefixCls} {...radioProps} type="radio" ref={ref} />;
};

export default React.forwardRef(RadioButton);
