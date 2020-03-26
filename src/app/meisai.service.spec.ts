/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MeisaiService } from './meisai.service';

describe('Service: Meisai', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeisaiService]
    });
  });

  it('should ...', inject([MeisaiService], (service: MeisaiService) => {
    expect(service).toBeTruthy();
  }));
});
