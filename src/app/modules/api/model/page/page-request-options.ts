import { PaginationOptions } from 'src/app/modules/ui/components/paginator/paginator.component';

export interface PageRequestOptions extends PaginationOptions {
    sortingField?: string;
}