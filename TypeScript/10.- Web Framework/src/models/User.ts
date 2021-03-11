import { Callback } from 'types/callback';

export interface UserProps {
  name?: string;
  age?: number;
}

class User {
  private data: UserProps;
  private events: { [key: string]: Callback[] } = {};

  constructor(data: UserProps = {}) {
    this.data = data;
  }

  get(prop: string): string | number | undefined {
    return this.data[prop as keyof UserProps];
  }

  set(props: UserProps): void {
    this.data = { ...this.data, ...props };
  }

  on(event: string, callback: Callback): void {
    const handlers: Callback[] = this.events[event] || [];
    handlers.push(callback);
    this.events[event] = handlers;
  }
}

export default User;
