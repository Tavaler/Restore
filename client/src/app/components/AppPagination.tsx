import { Typography, Pagination } from "@mui/material";
import { Box } from "@mui/system";
import { MetaData } from "../model/pagination";
<<<<<<< HEAD
 
interface Props {
    metaData: MetaData;
    onPageChange: (page: number) => void;
}
 
export default function AppPagination({metaData, onPageChange}: Props) {
    const {currentPage, totalCount, totalPages, pageSize} = metaData;
    return (
        <Box display='flex' justifyContent='space-between' alignItems='center'>
            <Typography color='#C91A47'>
                Displaying {(currentPage-1)*pageSize+1}-
                {currentPage*pageSize > totalCount 
                    ? totalCount 
                    : currentPage*pageSize} of {totalCount} items
            </Typography>
            <Pagination
                color='secondary'
                size='large'
                count={totalPages}
                page={currentPage}
                onChange={(e, page) => onPageChange(page)}
            />
        </Box>
    )
};


=======

interface Props {
  metaData: MetaData;
  onPageChange: (page: number) => void;
}
export default function AppPagination({ metaData, onPageChange }: Props) {
  const { currentPage, totalCount, totalPages, pageSize } = metaData;
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography color="#C91A47">
        Displaying {(currentPage - 1) * pageSize + 1}-
        {currentPage * pageSize > totalCount
          ? totalCount
          : currentPage * pageSize}{" "}
        of {totalCount} items
      </Typography>
      <Pagination
        color="secondary"
        size="large"
        count={totalPages}
        page={currentPage}
        onChange={(e, page) => onPageChange(page)}
      />
    </Box>
  );
}
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
