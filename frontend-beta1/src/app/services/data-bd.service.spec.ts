import { TestBed } from '@angular/core/testing';

import { DataBdService } from './data-bd.service';

describe('DataBdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataBdService = TestBed.get(DataBdService);
    expect(service).toBeTruthy();
  });
});
