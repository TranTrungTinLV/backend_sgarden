// customer_id
// products
// total_price
// type
// QRCode
// payment_status

import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
export class oderDto {
  @IsNotEmpty()
  products: {
    product_id: string;
    quantity: number;
    size: string;
  }[];
  @IsEnum(['delivery', 'inPlace'])
  type: string;

  @IsEnum(['pending', 'confirm'])
  payment_status?: string;
  @IsString()
  QRCode?: string;
  @IsString()
  customer_id?: string;
  @IsString()
  total_price?: string;
}

export class UpdateOrderDto {
  @IsEnum(['pending', 'confirm'])
  payment_status: string;
}
