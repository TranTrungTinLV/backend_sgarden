import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  username: string;
  @Prop()
  password: string;
  @Prop({
    unique: [true, 'it exists'],
  })
  email: string;
  @Prop()
  sex: boolean;
  @Prop()
  birthday: string;
  @Prop()
  phone: string;
  @Prop()
  level_member: string;
  @Prop()
  fullname: string;
  @Prop()
  score: string;
  @Prop({
    type: String,
    default:
      'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-541.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702512000&semt=ais',
  })
  avatar: string;
}

export const UserSchema = SchemaFactory.createForClass(User)