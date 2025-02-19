import {Params} from "next/dist/server/request/params";
import {recipeService} from "@/services/recipeService";
import {FC} from "react";
import {RecipeInfo} from "@/components/recipesContainer/recipeInfo/RecipeInfo";

type IProps = {
    params: Promise<Params>
}

const RecipeIdPage:FC<IProps> = async ({params}) => {
    const {id} = await params
    const recipe = await recipeService.getById(+id)
    return (
        <div>
            <RecipeInfo recipe={recipe}/>
        </div>

    );
};

export default RecipeIdPage;
