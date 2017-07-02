import { Phone } from './phone.model';

export class Register {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  confirmPassword: string;
  phoneNumbers: Array<Phone>;
}
