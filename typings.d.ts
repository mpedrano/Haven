interface IDog {
    id: number,
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

interface ICat {
    id: number,
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

interface IAnimal {
    id: number,
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

interface IRadio {
    options: string[];
    questionIndex: number;
    onSelect: (value: string) => void;
    selectedValue: string;
}




