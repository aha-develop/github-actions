import React, { memo } from 'react';

const IconText = (props: { icon: string; text?: string; style?: any; iconStyle?: any }) => (
  <span style={props.style ? { ...props.style } : {}}>
    <aha-icon icon={`${props.icon} type-icon`} style={props.iconStyle ? { ...props.iconStyle } : {}} />
    <span style={{ marginLeft: '5px' }}>{props.text}</span>
  </span>
);

export default memo(IconText);
