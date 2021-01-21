import * as React from 'react';
import omit from 'rc-util/lib/omit';
import classNames from 'classnames';
import type { ConfigConsumerProps } from '../config-provider';
import { ConfigConsumer } from '../config-provider';
import type { SkeletonElementProps } from './Element';
import Element from './Element';

export interface AvatarProps extends Omit<SkeletonElementProps, 'shape'> {
  shape?: 'circle' | 'square';
}

const SkeletonAvatar = (props: AvatarProps) => {
  const renderSkeletonAvatar = ({ getPrefixCls }: ConfigConsumerProps) => {
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
        <Element prefixCls={`${prefixCls}-avatar`} {...otherProps} />
      </div>
    );
  };
  return <ConfigConsumer>{renderSkeletonAvatar}</ConfigConsumer>;
};

SkeletonAvatar.defaultProps = {
  size: 'default',
  shape: 'circle',
};

export default SkeletonAvatar;
