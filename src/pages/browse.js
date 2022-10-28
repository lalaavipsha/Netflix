import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import { selectionFilter } from '../utils';

export default function Browse() {
  const { series } = useContent('series');
  const { films } = useContent('films');
  //series and films are passed as objects.
  const slides = selectionFilter({ series, films });

  return <BrowseContainer slides={slides} />;
}