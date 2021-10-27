import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { UserService } from './user.service';
import { User } from './user.entity';

@Resolver()
export class UserResolver {
    constructor(
        private userService: UserService
    ) {}

    @Query(() => [User])
    async users(): Promise<User[]> {
        const users = await this.userService.findAllUsers();
        return users;
    }

    @Mutation(()=> User)
    async createUser(

        @Args('data') data: CreateUserInput
    ): Promise<User> {
        const user = await this.userService.createUser(data);
        return user;
    }
}
