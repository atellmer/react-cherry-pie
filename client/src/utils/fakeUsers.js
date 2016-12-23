/** @flow */
import axios from 'axios';
import { Observable } from 'rxjs';


export class FakeUserService {
	getFakeUser() {
		const URL = 'https://randomuser.me/api';

		const data$ = Observable.fromPromise(axios.get(URL))
			.map(res => res.data);

		return data$;
	}
}
