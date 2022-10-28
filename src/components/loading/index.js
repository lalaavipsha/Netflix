import React from 'react';
import { LockBody, ReleaseBody, Spinner, Picture } from './styles/loading';

// body-lock is mainly down to eliminate any scrolling of the page.
export default function Loading({ src, ...restProps }) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} data-testid="loading-picture" />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};