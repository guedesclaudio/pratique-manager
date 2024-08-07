import { ModeEnum } from "../modules/common/contracts/enums";
import ShoppingDetail from "../modules/shopping/pages/shopping-detail";

export default function ShoppingCreatePage() {
    return <ShoppingDetail mode={ModeEnum.CREATE}/>
}
