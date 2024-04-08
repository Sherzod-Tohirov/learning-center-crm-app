import { overallCard } from "../../constants/constants";
import { Card } from "./components/Card/Card";

export function Overall() {
    return (
        <div className="p-8">
            <ul className="flex flex-wrap gap-8">
               {
                overallCard.map(card => (
                    <Card key={card.id} data={card} />
                ))
               }
            </ul>
        </div>
    )
}