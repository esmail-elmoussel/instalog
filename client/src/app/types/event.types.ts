export interface Event {
  id: string;
  name: string;
  createdAt: Date;
  user: {
    id: string;
    name: string;
    email: string;
  };
}
