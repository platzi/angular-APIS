import { TestBed } from '@angular/core/testing';

import { TimeInterceptor } from './time.interceptor';

describe('TimeInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TimeInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TimeInterceptor = TestBed.inject(TimeInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
