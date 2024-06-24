import styled from "styled-components";

export function InputBox({
    id,
    value,
    title,
    inputWidth,
    inputType,
}: {
    id: string,
    value: string,
    title: string,
    inputWidth?: string,
    inputType?: string,
}) {
    return (
        <Box>
            <label htmlFor={id}>{title}</label>
            <Input type={inputType ?? "text"} id={id} value={value} width={inputWidth}/>
        </Box>
    )
}

export const Input = styled.input`
    height: 34px;
    padding: 6px;
    border-radius: 3px;
    width: ${(props) => props.width || '250px'};
    border: 1px solid #a8a8a8;
    font-family: Arial, Helvetica, sans-serif;
    color: grey;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    position: static;
    max-width: 240px;

    label {
        font-size: 0.75rem;
        color: grey;
        position: relative;
        top: 0.5rem;
        margin: 0 0 0 7px;
        padding: 0 3px;
        background: white;
        width: fit-content;
    }
`;
