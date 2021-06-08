import { TestBed } from '@angular/core/testing';

import { ForecastServiceService } from './forecast-service.service';

describe('ForecastServiceService', () => {
  let service: ForecastServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForecastServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
