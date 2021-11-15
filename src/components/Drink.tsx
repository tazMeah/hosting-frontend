import { DrinksEntity } from "../models/drinks";

interface Props {
    idDrink: string,
    strDrink: string,
    strDrinkThumb: string
}

export default function Drink({idDrink, strDrink, strDrinkThumb}: Props) {
	return (
		<div className="drink">
			<p>
				{idDrink} {strDrink}
			</p>
			<img src={strDrinkThumb} />
		</div>
	);
}