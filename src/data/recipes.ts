export interface Recipe {
    title: string;
    description: string;
    id: number;
    data: object;
}

const recipes: Recipe[] = [
    {
        id: 1,
        title: 'Simple bread',
        description: 'A simple day to day bread',
        data: {
            percentages: {
                flour: 1,
                liquid: 0.66,
                yeast: 0.12,
                salt: 0.2,
            },
        },
    },
    {
        id: 2,
        title: 'Ciabatta',
        description: 'For the italian in you',
        data: {
            percentages: {
                flour: 1,
                liquid: 0.73,
                yeast: 0.12,
                salt: 0.2,
            },
        },
    },
    {
        id: 3,
        title: 'Ciabatta',
        description: 'For the italian in you',
        data: {
            percentages: {
                flour: 1,
                liquid: 0.73,
                yeast: 0.12,
                salt: 0.2,
            },
        },
    },
    {
        id: 4,
        title: 'Simple bread',
        description: 'A simple day to day bread',
        data: {
            percentages: {
                flour: 1,
                liquid: 0.66,
                yeast: 0.12,
                salt: 0.2,
            },
        },
    },
];

export const getRecipes = () => recipes;
export const getRecipe = (id: number) => recipes.find((r) => r.id === id);
