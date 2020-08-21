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
    IonInput,
    useIonViewWillEnter
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

    const [amount, setAmount] = useState<number>(0);

    const [values, setValues] = useState({
        liquid: 0,
        salt: 0,
        yeast: 0
    });

    const handleAmountChange = (e: CustomEvent) => {
        if (!recipe || !e.detail.value) {
            return;
        }
        console.log(`Updating recipe`);
        const {percentages} = recipe.data;
        let grams = parseInt(e.detail.value, 10);

        setAmount(grams);
        setValues({
            liquid: +(grams * percentages.liquid).toFixed(2),
            salt: +(grams * percentages.salt).toFixed(2),
            yeast: +(grams * percentages.yeast).toFixed(2)
        });
    };

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
                                        {`${recipe.data.percentages.flour *
                                            100}%`}
                                    </span>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>Liquid:</IonLabel>
                                    <span>
                                        {`${(
                                            recipe.data.percentages.liquid * 100
                                        ).toFixed(1)}%`}
                                    </span>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>Salt:</IonLabel>
                                    <span>
                                        {`${(
                                            recipe.data.percentages.salt * 100
                                        ).toFixed(1)}%`}
                                    </span>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>Yeast:</IonLabel>
                                    <span>
                                        {`${(
                                            recipe.data.percentages.yeast * 100
                                        ).toFixed(1)}%`}
                                    </span>
                                </IonItem>
                            </IonList>
                        </div>

                        <IonList>
                            <IonItem>
                                <IonLabel>Flour (g)</IonLabel>
                                <IonInput
                                    type="number"
                                    placeholder="grams"
                                    value={amount}
                                    onIonChange={handleAmountChange}></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel>Liquid (g)</IonLabel>
                                <IonLabel>{values && values.liquid}</IonLabel>
                            </IonItem>
                            <IonItem>
                                <IonLabel>Salt (g)</IonLabel>
                                <IonLabel>{values && values.salt}</IonLabel>
                            </IonItem>
                            <IonItem>
                                <IonLabel>Yeast (g)</IonLabel>
                                <IonLabel>{values && values.yeast}</IonLabel>
                            </IonItem>
                        </IonList>
                    </>
                )}
            </IonContent>
        </IonPage>
    );
};

export default ViewRecipe;
