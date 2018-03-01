import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { heroes } from './heroes';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/dematerialize';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  private heroes: any[] = heroes;

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return Observable.of(null).mergeMap(() => {

      if (request.url.endsWith('/heroes/list') && request.method === 'GET') {
        return Observable.of(
          new HttpResponse(
            {
              status: 200,
              body: this.heroes
            }
          )
        );
      }

      if (request.url.endsWith('/heroes/delete') && request.method === 'POST') {
        this.heroes = this.heroes.filter(item => item.id !== request.body);
        return Observable.of(
          new HttpResponse(
            {
              status: 200
            }
          )
        );
      }

      if (request.url.endsWith('/heroes/update') && request.method === 'POST') {
        let index: number = -1;
        this.heroes.forEach(item => {
          if (item.id == request.body.id) {
            index = this.heroes.indexOf(item);
          }
        });

        if (index !== -1) {
          this.heroes[index] = request.body;
          return Observable.of(
            new HttpResponse(
              {
                status: 200
              }
            )
          );
        }
      }
      return next.handle(request);
    })
      .materialize()
      .delay(500)
      .dematerialize();
  }
}
