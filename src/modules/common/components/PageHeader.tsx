import { PlusIcon } from "@/src/common/components";
import { BreadcrumbItem, Breadcrumbs, Button, Link } from "@nextui-org/react";
import styled from "styled-components";

const Header = styled.div<{width?: string}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 20px;
  width: ${(props) => (props.width ? props.width : '100%')};
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  color: grey;
`

export function PageHeader({
  title,
  breadCrumbItens,
  addButton,
  width
}: {
  title: string,
  breadCrumbItens: { name: string, route: string }[],
  addButton?: { message: string, onClick: any },
  width?: string,
}) {
  return (
    <Header width={width}>
      <Title>{title}</Title>
      <Breadcrumbs>
        {
          breadCrumbItens.map((value: { name: string, route: string }, index: number) => {
            return (
              <BreadcrumbItem>
                <Link href={value?.route}>{value.name}</Link>
              </BreadcrumbItem>
            )
          })
        }
      </Breadcrumbs>
      {
        addButton ? 
        <Button color="primary" endContent={<PlusIcon />} onClick={addButton.onClick}>
          { addButton.message }
        </Button> : ''
      }
    </Header>
  );
}
