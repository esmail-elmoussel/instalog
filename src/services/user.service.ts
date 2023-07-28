import { UserRepository } from "../repositories";

export class UserService {
  constructor(private readonly repository: UserRepository) {}

  getRandomOne = async () => {
    return this.repository.getRandomOne();
  };
}
