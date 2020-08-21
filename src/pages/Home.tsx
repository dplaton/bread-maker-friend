import RecipeListItem from '../components/RecipeListItem';
import React, {useState} from 'react';
import {Recipe, getRecipes} from '../data/recipes';
import {
    IonContent,
    IonHeader,
    IonList,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    IonTitle,
    IonToolbar,
    useIonViewWillEnter,
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useIonViewWillEnter(() => {
        const recipes = getRecipes();
        setRecipes(recipes);
    });

    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };

    return (
        <IonPage id="home-page">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Home</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonList>
                    {recipes.map((r) => (
                        <RecipeListItem key={r.id} recipe={r} />
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Home;
