import { DeleteIcon, EditIcon } from "@/src/common/components";
import { Input, Link, TableCell, Tooltip } from "@nextui-org/react";

export function handleAddItem(itens: any[], setItens: (value: React.SetStateAction<any[]>) => void)  {
    setItens([...itens, {
      id: Math.random(),
      productName: `Produto ${itens.length + 1}`,
      description: null,
      unitPrice: null,
      destiny: null,
    }]);
};

export function renderCell({item, columnKey, mode, itens, setItens}: any)  {
    const cellValue = item[columnKey];
    if (columnKey === "actions") {
      return (
        <div className="relative flex items-center gap-2">
          {createEditAction(mode)}
          {createRemoveAction({id: item.id, itens, setItens})}
        </div>
      );
    }
    return cellValue;
};

export function createEditAction(mode: string) {
  if (mode === "edit") {
    return (
      <Tooltip content="Editar item">
        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
          <Link href={"shopping-detail"}>
            <EditIcon />
          </Link>
        </span>
      </Tooltip>
    );
  }
}

export function createRemoveAction({id, itens, setItens}: any) {
  return (
    <Tooltip color="danger" content="Excluir itemm">
      <span className="text-lg text-danger cursor-pointer active:opacity-50">
        <DeleteIcon onClick={() => handleRemoveItem(id, itens, setItens)} />
      </span>
    </Tooltip>
  );
}

export function createCell({column, item, mode, itens, setItens, formData}: any) {
  const { register } = formData;
  const columnKey = column.uid;
  if (columnKey === "destiny") {
    return (
      <TableCell>
        <div style={{display: "flex"}}>
          <Input type="number" label="Bloco 1" {...register('quantityBloco1')}/>
          <Input type="number" label="Bloco 2" {...register('quantityBloco2')}/>
          <Input type="number" label="Estoque" {...register('quantityBloco3')}/>
        </div>
      </TableCell>
    )
  }
  return (
    <TableCell>
      {
        columnKey !== "actions" ? 
        <Input 
        type="text" 
        placeholder={column.placeholder} 
        //value={renderCell({item, columnKey, mode, itens, setItens})}
        {...register(columnKey)}
        /> : 
        renderCell({item, columnKey, mode, itens, setItens})
      }
    </TableCell>
  )
}

export function handleRemoveItem(id: number, itens: any[], setItens: (value: React.SetStateAction<any[]>) => void) {
  setItens(itens.filter((item: any) => item.id !== id));
};