import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 } from 'uuid';
@Schema({
  timestamps: true,
})
export class Order extends Document {
  @Prop({
    type: String,
    default: function UUID() {
      return v4().split('-')[0];
    },
  })
  customer_id: string;
  @Prop([
    {
      product_id: String,
      quantity: Number,
      size: String,
    },
  ])
  products: Record<string, any>[];
  @Prop()
  total_price: string;
  @Prop({ enum: ['delivery', 'inPlace'] })
  type: string;
  @Prop()
  QRCode: string;
  @Prop({ enum: ['pending', 'confirm'], default: 'pending' })
  payment_status: string;
}

export const OderSchema = SchemaFactory.createForClass(Order);
