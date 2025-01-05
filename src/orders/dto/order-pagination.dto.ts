import { IsEnum, IsOptional } from 'class-validator';
import { PaginationDto } from '../../common';
import { OrderStatus } from '@prisma/client';
import { OrderStatusList } from '../enum/order.enum';

export class OrderPaginationDto extends PaginationDto {
  @IsOptional()
  @IsEnum(OrderStatus, {
    message: `Valid status are ${OrderStatusList}`,
  })
  status: OrderStatus;
}
