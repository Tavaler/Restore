<<<<<<< HEAD
//สำหรับรับค่าที่ส่งมาจาก Api : Response Header
export interface MetaData {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    totalCount: number;
}
 
// T-->Product array
export class PaginatedResponse<T> {
    items: T;
    metaData: MetaData;
 
    constructor(items: T, metaData: MetaData) {
        this.items = items;
        this.metaData = metaData;
    }
} 
=======
//ส ําหรับรับค่ําที่ส่งมําจําก Api : Response Header
export interface MetaData {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalCount: number;
}
// T-->Product array
export class PaginatedResponse<T> {
  items: T;
  metaData: MetaData;
  constructor(items: T, metaData: MetaData) {
    this.items = items;
    this.metaData = metaData;
  }
}
    
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
