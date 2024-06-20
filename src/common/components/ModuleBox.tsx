import styled from "styled-components";

export function ModuleBox({
    title,
    options,
}: {
    title: string;
    options: string[];
}) {
    return (
        <ModuleCard>
            <h2>
                {title} <span>-&gt;</span>
            </h2>
            <div>
                {options?.map((value: string, index: number) => <p key={index}>{value}</p>)}
            </div>
        </ModuleCard>
    );
}

const ModuleCard = styled.div`
    padding: 10px;
    border-radius: 6px;
    width: 300px;
    background: white;
    transition: background 200ms, border 200ms;
    cursor: pointer;

    span {
        display: inline-block;
        transition: transform 200ms;
    }

    h2 {
        font-weight: 600;
        margin-bottom: 0.7rem;
    }

    p {
        margin: 0;
        opacity: 0.6;
        font-size: 0.9rem;
        line-height: 1.5;
        max-width: 30ch;
        text-wrap: balance;
    }
`;
