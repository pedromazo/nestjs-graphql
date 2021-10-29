import { hashSync } from "bcrypt"

export const hashPasswordTransformer = {
    from(password: string): string {
        return hashSync(password, 10);
    },
    to(hash: string): string {
        return hash;
    }
}