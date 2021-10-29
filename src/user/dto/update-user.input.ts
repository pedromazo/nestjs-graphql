import { InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

@InputType()
export class UpdateUserInput {
    @IsString()
    @IsNotEmpty({message: "Este campo não pode estar vazio"})
    @IsOptional()
    name?: string;
    
    @IsEmail()
    @IsNotEmpty({message: "Este campo não pode estar vazio"})
    @IsOptional()
    email?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty({message: "Password is required"})
    password?: string;
}