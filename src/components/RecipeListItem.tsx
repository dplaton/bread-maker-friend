import React from 'react';
import {Recipe} from '../data/recipes';
import {IonItem, IonLabel} from '@ionic/react';
interface RecipeListItemProps {
    recipe: Recipe;
}

const RecipeListItem: React.FC<RecipeListItemProps> = ({recipe}) => {
    return (
        <IonItem routerLink={`/recipe/${recipe.id}`}>
            <IonLabel>
                <h2>{recipe.title}</h2>
                <h4>{recipe.description}</h4>
            </IonLabel>
        </IonItem>
    );
};

export default RecipeListItem;
