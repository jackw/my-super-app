/**
 * This file contains TypeScript type definitions that are meant to be exposed and reused in other plugins.
 */

import type { ComponentSize } from '@grafana/ui';

//
export interface Scope extends V0.Scope {}

export interface EntityAssertionsWidgetProps extends V0.EntityAssertionsWidgetProps {}

export interface UseEntityParams extends V0.UseEntityParams {}

// Version 0.x.x
declare namespace V0 {
  export interface Scope {
    env?: string;
    site?: string;
    namespace?: string;
  }

  export interface EntityAssertionsWidgetProps {
    // The query object that contains the entity name, entity type, start, and end time
    query: UseEntityParams;
    // The size of the button
    size?: ComponentSize;
  }

  export interface UseEntityParams {
    entityName?: string;
    entityType?: string;
    start: number;
    end: number;
    scope?: Scope;
  }
}
