import Link from "next/link";
import styled from "styled-components";

export function ModuleBox({
    title,
    options,
    redirectRoute,
}: {
    title: string;
    options: string[];
    redirectRoute?: string;
}) {
    return (
        <Link href={redirectRoute  ?? ""}>
            <ModuleCard>
                <h2> {title} </h2>
                <div>
                    {options?.map((value: string, index: number) => <p key={index}>{value}</p>)}
                </div>
            </ModuleCard>
        </Link>
    );
}

const ModuleCard = styled.div`
    padding: 10px;
    border-radius: 6px;
    width: 300px;
    height: 120px;
    cursor: pointer;
    background-color: white;
    background: rgba( 255, 255, 255, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    &:hover {
        scale: 1.1;
        transition: 1000ms;
    }

    span {
        display: inline-block;
        transition: transform 200ms;
    }

    h2 {
        font-weight: 600;
        margin-bottom: 0.7rem;
    }

    p {
        opacity: 0.6;
        font-size: 0.9rem;
        line-height: 1.5;
        text-align: center;
    }
`;
