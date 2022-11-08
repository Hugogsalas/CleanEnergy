export interface User {
  _id: string;
  email: string;
  address: string;
  name: string;
  lastName: string;
  password: string;
  secondLastName: string;
  phone: string;
}

export type RequestUser = Omit<User, 'password'>;

export interface LoginParams {
  email: string;
  password: string;
}

export interface SigInParams {
  email: string;
  address?: string;
  password: string;
  name?: string;
  lastName?: string;
  secondLastName?: string;
  phone?: string;
}
