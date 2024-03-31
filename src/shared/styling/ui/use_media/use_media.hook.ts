import type { ScreenSizesConfig } from '@shared/styling/types/screen_sizes_config.type';
import { useEffect, useRef, useState } from 'react';

import MediaQueryListener from './media_query_listener';


type QueryResults = { [key in keyof ScreenSizesConfig]: boolean };

export const useMedia = (queryObject: ScreenSizesConfig) : QueryResults => {
  const activeQueries = useRef<{ name: string, mqListener: MediaQueryListener }[]>([]);

  const getMatches : () => QueryResults = () => activeQueries.current.reduce(
    (acc, { name, mqListener }) => ({ ...acc, [name]: mqListener.matches }),
    {
      small: false,
      medium: false,
      large: false,
    },
  );

  const updateMatches = () => {
    setMatches(getMatches());
  };

  const setUpMQLs = () => {
    const activeTargetWindow = window;

    if ( typeof activeTargetWindow.matchMedia !== 'function') {
      throw new Error('<Media targetWindow> does not support `matchMedia`.');
    }

    activeQueries.current = Object.keys(queryObject).map((name) => {
      const currentQuery = queryObject[name as keyof ScreenSizesConfig];
      const mqListener = new MediaQueryListener(
        activeTargetWindow,
        currentQuery,
        updateMatches,
      );

      return { name, mqListener };
    });
  };

  const [ matches, setMatches ] = useState(() => {
    setUpMQLs();

    return getMatches();
  });


  useEffect(
    // Because setup happens in the state constructor, cleanup is the only thing that
    // useEffect is responsible for.
    () => () => activeQueries.current.forEach(({ mqListener }) => mqListener.cancel()),
    [],
  );

  return matches;
};