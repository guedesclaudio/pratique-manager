import { Table, TableHeader, TableColumn, TableBody, TableRow, Link, Chip, DatePicker, Input, Breadcrumbs, BreadcrumbItem, Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { initialColumns, productsDefault } from "@/src/mock/shopping-mock";
import { createCell, handleAddItem } from "../utils";
import { Box, BoxHeader, Header } from "../styles/shopping-detail.styles";

export default function ShoppingDetail({ mode }: {mode: string}) {
  const [columns, setColumns] = useState<any[]>(initialColumns);
  const [itens, setItens] = useState<any[]>(productsDefault);

  useEffect(() => {
    if (mode === "create") {
      setItens([]);
      setColumns([...initialColumns, { name: "Ações", uid: "actions", placeholder: undefined }, { name: "+", uid: "addItem", placeholder: undefined }]);
    }
  }, [mode]);

  return (
    <>
      <Header>
        <Breadcrumbs>
          <BreadcrumbItem>
            <Link href={"home"} style={{ color: "grey" }}>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href={"shopping-list"} style={{ color: "grey" }}>Compras</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>174</BreadcrumbItem>
          <BreadcrumbItem>Editar</BreadcrumbItem>
        </Breadcrumbs>
      </Header>
      <Box>
        <BoxHeader>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input type="text" label="Loja" placeholder="Digite o nome da loja" value={"COFEUS"} />
          </div>
          <DatePicker label="Data da compra" className="max-w-[284px]" value={undefined} />
        </BoxHeader>
        <div>
          <Table aria-label="Example table with custom cells">
            <TableHeader>
              {columns.map(column => (
                <TableColumn key={column.uid} align={"start"} style={{ backgroundColor: "black" }}>
                  {column.uid === "addItem" ? (
                    <Button
                      color="primary"
                      variant="ghost"
                      size="sm"
                      radius="full"
                      onClick={() => handleAddItem(itens, setItens)}
                    >
                      {column.name}
                    </Button>
                  ) : (
                    column.name
                  )}
                </TableColumn>
              ))}
            </TableHeader>
            <TableBody>
              {itens.map(item => (
                <TableRow key={item.id}>
                  {columns.map(column => createCell({columnKey: column.uid, item, mode, itens, setItens}))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Chip color="primary" style={{ marginLeft: "10px" }}>13 unidades</Chip>
          <Chip color="success" style={{ marginLeft: "10px", color: "white" }}>Valor total: R$ 357,50</Chip>
        </div>
      </Box>
    </>
  );
}
