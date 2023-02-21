import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  contact: number;

  @Prop()
  logo: string;
}

export const UserSchema = SchemaFactory.createForClass(User);