/** @flow */
import axios from 'axios';
import { Observable } from 'rxjs';


export class FakeUserService {
  getFakeUser(options: any): Observable<any> {
    const URL = 'https://randomuser.me/api';

    const data$ = Observable.fromPromise(axios.get(URL, { params: options }))
      .map(res => res.data);

    return data$;
  }
}
