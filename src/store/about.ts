import { Store } from '../core/heropy';

interface State {
  photo: string;
  name: string;
  email: string;
  blog: string;
  github: string;
  repository: string;
}

export default new Store<State>({
  photo: 'https://heropy.blog/css/images/logo.png',
  name: 'LamiDs / ByunKyungHwan',
  email: 'sprtmsdy1@gmail.com',
  blog: 'https://naver.com',
  github: 'https://github.com',
  repository: 'https://github.com',
});
