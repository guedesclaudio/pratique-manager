import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip, Button, Breadcrumbs, BreadcrumbItem, Input} from "@nextui-org/react";
import Link from "next/link";
import { DeleteIcon, EditIcon, EyeIcon, PlusIcon } from "@/src/common/components";
import { shoopingListColumnNames } from "../utils";
import styled from "styled-components";

const users = [
    {
      id: 189,
      storeName: "COFEUS",
      totalValue: 123.98,
      date: "05/06/2024",
    },
    {
      id: 19889,
      storeName: "COFEUS",
      totalValue: 123.98,
      date: "05/06/2024",
    },
    {
      id: 547,
      storeName: "COFEUS",
      totalValue: 123.98,
      date: "05/06/2024",
    },
    {
      id: 26,
      storeName: "COFEUS",
      totalValue: 123.98,
      date: "05/06/2024",
    },
    {
      id: 36,
      storeName: "COFEUS",
      totalValue: 123.98,
      date: "05/06/2024",
    },
];

export default function ShoppingList() {
  const renderCell = React.useCallback((user: any, columnKey: any) => {
    const cellValue = user[columnKey];

    if (columnKey === "actions") {
      return (
        <div className="relative flex items-center gap-2">
          <Tooltip content="Detalhes">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <Link href={"shopping-detail"}>
                <EyeIcon />
              </Link>
            </span>
          </Tooltip>
          <Tooltip content="Editar item">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
            <Link href={"shopping-detail"}>
              <EditIcon />
            </Link>
            </span>
          </Tooltip>
          <Tooltip color="danger" content="Excluir item">
            <span className="text-lg text-danger cursor-pointer active:opacity-50">
              <Link href={"shopping-detail"}>
                <DeleteIcon />
              </Link>
            </span>
          </Tooltip>
        </div>
      );
    }
    
    return cellValue;
  }, []);

  return (
    <>
      <Header>
        <Title>Visualize suas compras</Title>
        <Breadcrumbs>
          <BreadcrumbItem>
            <Link href={"home"}>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>Compras</BreadcrumbItem>
        </Breadcrumbs>
        <Button color="primary" endContent={<PlusIcon />}>
          Adicionar uma nova compra
        </Button>
      </Header>
      
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={shoopingListColumnNames}>
          {(column) => (
            <TableColumn key={column.uid} align={"start"} style={{backgroundColor: "black"}}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={users}>
          {(item) => (
            <TableRow key={item.id}>
              {
                (columnKey) => 
                  <TableCell>
                    {columnKey !== "actions" && columnKey !== "id" ? <Input type="text" placeholder="Digite o nome da loja" value={renderCell(item, columnKey)} disabled/> : renderCell(item, columnKey)}
                  </TableCell>
              }
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  color: grey;
`