import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RoutePath } from 'src/app/app-routing.module';

import { NavigationService } from './navigation.service';

describe('NavigationService', () => {
  let service: NavigationService;
  // let router: jasmine.SpyObj<Router>;

  const spyRouter: jasmine.SpyObj<Router> = jasmine.createSpyObj('Router', [
    'navigate',
  ]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Router, useValue: spyRouter }],
    });

    service = TestBed.inject(NavigationService);
  });

  describe('service init', () => {
    it('should create service', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('methods', () => {
    it('should navigate to login page', () => {
      service.navigateToLoginPage();
      expect(spyRouter.navigate).toHaveBeenCalledWith([RoutePath.LOGIN]);
    });
  });
});
