import * as React from 'react';
import type { BlockProps } from './Base';
import Base from './Base';

export interface ParagraphProps extends BlockProps {}

const Paragraph: React.FC<ParagraphProps> = props => <Base {...props} component="div" />;

export default Paragraph;
