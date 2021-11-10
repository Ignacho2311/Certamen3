import { TestBed } from '@angular/core/testing';

import { CrearCursosServicioService } from './crear-cursos-servicio.service';

describe('CrearCursosServicioService', () => {
  let service: CrearCursosServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearCursosServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
