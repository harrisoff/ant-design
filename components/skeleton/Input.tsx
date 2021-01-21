import * as React from 'react';
import omit from 'rc-util/lib/omit';
import classNames from 'classnames';
import type { SkeletonElementProps } from './Element';
import Element from './Element';
import type { ConfigConsumerProps } from '../config-provider';
import { ConfigConsumer } from '../config-provider';

export interface SkeletonInputProps extends Omit<SkeletonElementProps, 'size' | 'shape'> {
  size?: 'large' | 'small' | 'default';
}

const SkeletonInput = (props: SkeletonInputProps) => {
  const renderSkeletonInput = ({ getPrefixCls }: ConfigConsumerProps) => {
    const { prefixCls: customizePrefixCls, className, active } = props;
    const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
    const otherProps = omit(props, ['prefixCls']);
    const cls = classNames(
      prefixCls,
      `${prefixCls}-element`,
      {
        [`${prefixCls}-active`]: active,
      },
      className,
    );
    return (
      <div className={cls}>
        <Element prefixCls={`${prefixCls}-input`} {...otherProps} />
      </div>
    );
  };
  return <ConfigConsumer>{renderSkeletonInput}</ConfigConsumer>;
};

SkeletonInput.defaultProps = {
  size: 'default',
};

export default SkeletonInput;
