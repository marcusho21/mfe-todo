import { Injector, Type } from '@angular/core';
import { createCustomElement } from '@angular/elements';

export type CustomElementRef<T = unknown> = {
  name: string;
  component: Type<T>;
};

export const defineCustomElements = <T>(
  mfeCustomElements: ReadonlyArray<CustomElementRef<T>> | CustomElementRef<T>[],
  config: { injector: Injector }
) => {
  mfeCustomElements.forEach((ceRef) => {
    const el = createCustomElement(ceRef.component, {
      injector: config.injector,
    });

    if (!customElements.get(ceRef.name)) {
      customElements.define(ceRef.name, el);
    }
  });
};
