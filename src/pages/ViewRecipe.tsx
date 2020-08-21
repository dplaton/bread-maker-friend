import React, {useState} from 'react';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonContent,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
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
            <IonContent fullscreen>
                {recipe && (
                    <>
                        <IonItem>
                            <IonLabel className="ion-text-wrap">
                                <h2>{recipe.title}</h2>
                            </IonLabel>
                        </IonItem>
                        <div className="ion-padding">
                            <IonList>
                                <IonListHeader>
                                    <IonLabel>
                                        <h3>Baker's percentages:</h3>
                                    </IonLabel>
                                </IonListHeader>
                                <IonItem>
                                    <IonLabel>Flour:</IonLabel>
                                    <span>
                                        {`${
                                            recipe.data.percentages.flour * 100
                                        }%`}
                                    </span>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>Liquid:</IonLabel>
                                    <span>
                                        {`${
                                            recipe.data.percentages.liquid * 100
                                        }%`}
                                    </span>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>Salt:</IonLabel>
                                    <span>
                                        {`${
                                            recipe.data.percentages.salt * 100
                                        }%`}
                                    </span>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>Yeast:</IonLabel>
                                    <span>
                                        {`${
                                            recipe.data.percentages.yeast * 100
                                        }%`}
                                    </span>
                                </IonItem>
                            </IonList>
                        </div>
                    </>
                )}
            </IonContent>
        </IonPage>
    );
};

export default ViewRecipe;
