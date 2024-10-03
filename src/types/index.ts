/**
 * This file contains TypeScript type definitions that are meant to be exposed and reused in other plugins.
 */

import type { ComponentSize } from '@grafana/ui';

export interface EntityAssertionsWidgetProps {
  // The query object that contains the entity name, entity type, start, and end time
  query: UseEntityParams;
  // The size of the button
  size?: ComponentSize;
}

export interface Scope {
  env?: string;
  site?: string;
  namespace?: string;
}

export interface UseEntityParams {
  entityName?: string;
  entityType?: string;
  start: number;
  end: number;
  scope?: Scope;
}
