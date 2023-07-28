import { UserRepository } from "../repositories";

export class UserService {
  constructor(private readonly repository: UserRepository) {}

  getAll = async () => {
    return this.repository.getAll();
  };
}
