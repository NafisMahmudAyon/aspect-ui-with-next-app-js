import { Skeleton } from '../Skeleton'
import { Table, TableBody, TableCaption, TableCell, TableHeadCell, TableHeader, TableRow } from '../Table'

const TableExample = () => {
  return (
    <div className='w-full overflow-auto'>
      <Table className='table-auto'>
        <TableCaption className='caption-bottom text-caption'>Table Caption</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHeadCell>
              <Skeleton variation='text' width="100px" className='dark:bg-primary-200' /></TableHeadCell>
            <TableHeadCell>
              <Skeleton variation='text' width="100px" className='dark:bg-primary-200' /></TableHeadCell>
            <TableHeadCell>
              <Skeleton variation='text' width="100px" className='dark:bg-primary-200' /></TableHeadCell>
            <TableHeadCell>
              <Skeleton variation='text' width="100px" className='dark:bg-primary-200' /></TableHeadCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className='whitespace-nowrap'>
              <Skeleton variation='text' width="100px" />
            </TableCell>
            <TableCell className='whitespace-nowrap'>
              <Skeleton variation='text' width="100px" />
            </TableCell>
            <TableCell className='whitespace-nowrap'>
              <Skeleton variation='text' width="100px" />
            </TableCell>
            <TableCell className='whitespace-nowrap'>
              <Skeleton variation='text' width="100px" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='whitespace-nowrap'>
              <Skeleton variation='text' width="100px" />
            </TableCell>
            <TableCell className='whitespace-nowrap'>
              <Skeleton variation='text' width="100px" />
            </TableCell>
            <TableCell className='whitespace-nowrap'>
              <Skeleton variation='text' width="100px" />
            </TableCell>
            <TableCell className='whitespace-nowrap'>
              <Skeleton variation='text' width="100px" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='whitespace-nowrap'>
              <Skeleton variation='text' width="100px" />
            </TableCell>
            <TableCell className='whitespace-nowrap'>
              <Skeleton variation='text' width="100px" />
            </TableCell>
            <TableCell className='whitespace-nowrap'>
              <Skeleton variation='text' width="100px" />
            </TableCell>
            <TableCell className='whitespace-nowrap'>
              <Skeleton variation='text' width="100px" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default TableExample