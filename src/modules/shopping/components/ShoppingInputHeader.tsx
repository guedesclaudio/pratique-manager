import { DatePicker, Input } from "@nextui-org/react";
import { BoxHeader } from "../styles/shopping-detail.styles";

export function ShoppingInputHeader({formData, isDisabled}: any) {
    const { register } = formData;
  
    return (
      <BoxHeader>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input 
            type="text" 
            label="Loja" 
            placeholder="Digite o nome da loja" 
            {...register('storeName')}
            disabled={isDisabled}
          />
        </div>
        <DatePicker 
          label="Data da compra" 
          className="max-w-[284px]" 
          value={undefined}
        />
      </BoxHeader>
    );
}