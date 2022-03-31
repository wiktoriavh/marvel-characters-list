import { forwardRef } from 'react';
import type { Components } from 'react-virtuoso';

import styles from './CharacterList.module.css';
import type { ListRef } from './types';

export const List = forwardRef<ListRef, Components['List']>(
  ({ children, ...props }, ref) => {
    return (
      <ul {...props} ref={ref} className={styles.list}>
        {children}
      </ul>
    );
  }
);
