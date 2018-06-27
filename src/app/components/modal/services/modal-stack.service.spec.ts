import { TestBed, inject } from '@angular/core/testing';

import { ModalStackService } from './modal-stack.service';

describe('ModalStackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalStackService]
    });
  });

  it('should be created', inject([ModalStackService], (service: ModalStackService) => {
    expect(service).toBeTruthy();
  }));
});
