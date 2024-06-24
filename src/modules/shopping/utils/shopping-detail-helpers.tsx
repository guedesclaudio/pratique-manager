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
    <Tooltip color="danger" content="Excluir item" onClick={() => handleRemoveItem(id, itens, setItens)}>
      <span className="text-lg text-danger cursor-pointer active:opacity-50">
        <DeleteIcon />
      </span>
    </Tooltip>
  );
}

export function createCell({columnKey, item, mode, itens, setItens}: any) {
  if (columnKey === "destiny") {
    return (
      <TableCell>
        <div style={{display: "flex"}}>
          <Input type="number" label="Bloco 1" placeholder="Bloco 1" value={"2"} disabled/>
          <Input type="number" label="Bloco 2" placeholder="Bloco 2" value={"3"} disabled/>
          <Input type="number" label="Estoque" placeholder="Estoque" value={"4"} disabled/>
        </div>
      </TableCell>
    )
  }
  return (
    <TableCell>
      {columnKey !== "actions" ? <Input type="text" placeholder={item.placeholder} value={renderCell({item, columnKey, mode, itens, setItens})} disabled/> : renderCell({item, columnKey, mode, itens, setItens})}
    </TableCell>
  )
}

export function handleRemoveItem(id: number, itens: any[], setItens: (value: React.SetStateAction<any[]>) => void) {
  console.log(id)
  console.log(itens)
  console.log(setItens)
  setItens(itens.filter((item: any) => item.id !== id));
};