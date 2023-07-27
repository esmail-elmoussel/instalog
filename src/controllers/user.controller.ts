import { UserService } from "../services/user.service";

export class UserController {
  constructor(private readonly userService: UserService) {}

  get = () => {
    return this.userService.get();
  };
}
