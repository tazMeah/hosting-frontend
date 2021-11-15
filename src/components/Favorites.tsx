import { DrinksEntity } from "../models/drinks";
import { getFavorites } from "../services/cocktailService";
import { useState, useEffect } from "react";
import Drink from "./Drink";

export default function Favorites() {
    const [favorites, setFavorites] = useState<DrinksEntity[]>([]);

    useEffect(()=>{
        getFavorites().then(response => {
            setFavorites(response)
        })
    },[])

    return (
        <div className="drink">
           {
               favorites.map((drink, index)=> (
                   <Drink key={index} idDrink={drink.idDrink} strDrink={drink.strDrink} strDrinkThumb={drink.strDrinkThumb} />
               ))
           }
        </div>
    )
}