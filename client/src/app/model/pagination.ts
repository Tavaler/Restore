<<<<<<< HEAD
//สำหรับรับค่าที่ส่งมาจาก Api : Response Header
=======
//ส ําหรับรับค่ําที่ส่งมําจําก Api : Response Header
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
export interface MetaData {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalCount: number;
}
<<<<<<< HEAD

=======
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
// T-->Product array
export class PaginatedResponse<T> {
  items: T;
  metaData: MetaData;
<<<<<<< HEAD

  constructor(items: T, metaData: MetaData) {
      this.items = items;
      this.metaData = metaData;
  }
} 
=======
  constructor(items: T, metaData: MetaData) {
    this.items = items;
    this.metaData = metaData;
  }
}
    
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
