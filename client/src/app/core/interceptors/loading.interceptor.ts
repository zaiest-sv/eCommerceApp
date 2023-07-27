import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {delay, finalize, identity, Observable} from 'rxjs';
import {LoadingService} from "../services/loading.service";
import {environment} from "../../../environments/environment";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingService.busy();
    return next.handle(request).pipe(
      (environment.production ? identity : delay(2000)),
      finalize(() => this.loadingService.idle())
    );
  }
}
