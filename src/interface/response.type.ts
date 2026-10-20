import { Category } from './category.interface';
import { ListResponse } from './listingResponse.interface';
import { Iproduct } from './product.interface';

export type categoryResponse = ListResponse<Category>;
export type productResponse = ListResponse<Iproduct>;