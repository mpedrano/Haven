interface IDog {
    name: string;
    gender: string;
    age: string;
    photos: { medium: string }[];
    contact: {
        address: {
            city: string;
        }
    };
}

interface INonprofit {
    ein: string;
    name: string;
    description: string;
}