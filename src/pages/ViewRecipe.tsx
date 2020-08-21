import React, {useState} from 'react';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    useIonViewWillEnter,
} from '@ionic/react';
import {RouteComponentProps} from 'react-router';

import {Recipe, getRecipe} from '../data/recipes';

import './ViewRecipe.css';

interface ViewRecipeProps extends RouteComponentProps<{id: string}> {}

const ViewRecipe: React.FC<ViewRecipeProps> = ({match}) => {
    const [recipe, setRecipe] = useState<Recipe>();

    useIonViewWillEnter(() => {
        const rec = getRecipe(parseInt(match.params.id, 10));
        setRecipe(rec);
    });

    return (
        <IonPage id="view-recipe-page">
            <IonHeader translucent>
                <IonToolbar>
                    <IonButtons>
                        <IonBackButton
                            text="Home"
                            defaultHref="/home"></IonBackButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
        </IonPage>
    );
};

export default ViewRecipe;
