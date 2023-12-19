import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class SignupDto {
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter correct email' })
  readonly email: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly sex: boolean;

  @IsNotEmpty()
  @IsString()
  readonly birthday: string;

  @IsNotEmpty()
  @IsString()
  readonly phone: string;

  @IsNotEmpty()
  @IsString()
  readonly level_member: string;

  @IsNotEmpty()
  @IsString()
  readonly fullname: string;

  @IsString()
  readonly avatar;
}
