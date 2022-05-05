import React from 'react';
import { isValidExternalLink } from '@helpers/isValidExternalLink';

export type ExternalLinkProps = React.HTMLProps<HTMLLinkElement>;

export const ExternalLink = (props: ExternalLinkProps) => {
  if (isValidExternalLink(props.href ?? '')) {
    return (
      <a {...(props as any)} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    );
  } else return <>"Invalid external URL."</>;
};

export default ExternalLink;
