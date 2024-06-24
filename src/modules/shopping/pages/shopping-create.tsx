import { Button, DatePicker, Input } from "@nextui-org/react";
import { useState } from "react";
import styled from "styled-components";
import ShoppingDetail from "./shopping-detail";

export default function ShoppingCreate() {
    const productsCreateBoxes = [];
    const [list, setList] = useState<any>([])

    return (
        <ShoppingDetail mode="create"/>
    )
}

function ProductCreateBox() {
    return (
        <ProductCreateBoxDiv>
            <Input
                type="text"
                label="Produto"
                placeholder="Digite o nome do Produto"
            /> 
            <Input
                type="number"
                label="Preço unitário"
                placeholder="0.00"
                startContent={
                    <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">$</span>
                    </div>
                }
            />
            <Input
                type="number"
                label="Bloco 1"
                placeholder="un"
            /> 
            <Input
                type="number"
                label="Bloco 2"
                placeholder="un"
            /> 
            <Input
                type="number"
                label="Estoque"
                placeholder="un"
            /> 
        </ProductCreateBoxDiv>
    );
}

const ProductCreateBoxDiv = styled.div`
    border: 1px solid red;
    display: flex;
    
`

const Container = styled.div`
    width: 1000px;
    margin: 50px auto;
`