import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue, Card, CardHeader, CardBody, Image, Spacer } from "@nextui-org/react";
import { users } from "./data";

export default function LetterPage() {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 4;

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);

  return (
    <div style={{

      width: '50%', // 限制最大宽度为页面宽度的 80%
      marginBottom: '10%',
      marginTop: '5%',
      marginLeft: '10%' // 整体向左偏移页面宽度的 10%
    }}>
      <div style={{ marginLeft: "25%", height: "150%", width: '50%', display: "flex", justifyContent: "center", }}>
        <Card
          aria-label="Example table with client side pagination"
          classNames={{
            wrapper: "min-h-[350px]",
          }}>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Daily Mix</p>
            <small className="text-default-500">12 Tracks</small>
            <h4 className="font-bold text-large">Frontend Radio</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="/images/hero-card-complete.jpeg"
              width={270}
            />
          </CardBody>
        </Card>
        <Spacer x={4}></Spacer>
      </div>

      <div style={{ paddingTop: "20px" }}
        className="flex w-full justify-center">
        <Pagination
          loop
          isCompact
          showControls
          showShadow
          color="secondary"
          page={page}
          total={pages}
          onChange={(page) => setPage(page)}
        />
      </div>

      {/* <Table
        aria-label="Example table with client side pagination"
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="secondary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        }
        classNames={{
          wrapper: "min-h-[222px]",
        }}
      >

        <TableHeader>
          <TableColumn key="name">NAME</TableColumn>
          <TableColumn key="role">ROLE</TableColumn>
          <TableColumn key="status">STATUS</TableColumn>
        </TableHeader>
        <TableBody items={items}>
          
          {(item) => (
            <TableRow key={item.name}>
              {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table> */}
    </div>
  );

}
