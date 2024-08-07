import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip, Button, Breadcrumbs, BreadcrumbItem, Input} from "@nextui-org/react";
import Link from "next/link";
import { DeleteIcon, EditIcon, EyeIcon, PlusIcon } from "@/src/common/components";
import { shoopingListColumnNames } from "../utils";
import styled from "styled-components";
import { users } from "@/src/mock/shopping-mock";
import { PageHeader } from "../../common/components";

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
      <PageHeader 
        title="Visualize suas compras"
        breadCrumbItens={[
          { name: 'Home', route: 'home' }, 
          { name: 'Compras', route: 'shopping-list' }
        ]}
        addButton={{ message: 'Adicionar uma nova compra', onClick: () => undefined }}
      />
      
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