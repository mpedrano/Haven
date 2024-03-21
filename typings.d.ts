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

interface ICat {
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




