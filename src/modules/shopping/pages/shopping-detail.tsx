import { Table, TableHeader, TableColumn, TableBody, TableRow, Link, Chip, DatePicker, Input, Breadcrumbs, BreadcrumbItem, Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { initialColumns, productsDefault } from "@/src/mock/shopping-mock";
import { createCell, handleAddItem } from "../utils";
import { Box } from "../styles/shopping-detail.styles";
import { useForm } from "react-hook-form";
import { PageHeader } from "../../common/components";
import { ShoppingInputHeader } from "../components/ShoppingInputHeader";
import { ModeEnum } from "../../common/contracts/enums";

const modeAction = {
  CREATE: 'Crie novos itens',
  EDIT: 'Edite seus itens',
  READ: 'Visualize seus itens',
}

export default function ShoppingDetail({ mode }: {mode: ModeEnum}) {
  const [columns, setColumns] = useState<any[]>(initialColumns);
  const [itens, setItens] = useState<any[]>(productsDefault);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const formData = { register };
  const onSubmit = (data: any) => {
    console.log(data);
  };

  useEffect(() => {
    if (mode === ModeEnum.CREATE) {
      setItens([]);
      setColumns([...initialColumns, { name: "Ações", uid: "actions", placeholder: undefined }, { name: "+", uid: "addItem", placeholder: undefined }]);
    }
  }, [mode]);
  const isDisabled = mode === ModeEnum.READ ? true : false;

  return (
    <>
      <PageHeader 
        title={modeAction[mode]}
        breadCrumbItens={[
          { name: 'Home', route: 'home' }, 
          { name: 'Compras', route: 'shopping-list' },
          { name: '174', route: ''},
          { name: 'Editar', route: ''},
        ]}
        width="1000px"
      />
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ShoppingInputHeader formData={formData} isDisabled={isDisabled} />
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
                    {columns.map(column => createCell({column, item, mode, itens, setItens, formData}))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Chip color="primary" style={{ marginLeft: "10px" }}>13 unidades</Chip>
            <Chip color="success" style={{ marginLeft: "10px", color: "white" }}>Valor total: R$ 357,50</Chip>
            <Button style={{display: `${mode === ModeEnum.CREATE ? 'flex' : 'none'}`}} type="submit"> Salvar </Button>
          </div>
        </form>
      </Box>
    </>
  );
}
