export interface Alert {
    show: boolean;
    variant: string;
    message: string
}

export interface Property {
    displayAlert: Alert;
    setAlert: Function;
}

export interface User {
    id: string;
    name: string;
    description: string;
    image: string;
    date: Date;
}

export interface ItemList {
    search: string;
    selected: User | null;
    setSelected: Function;
}
export interface ItemView {
    selected: User | null;
    setAlert: Function;
    setSelected: Function;
}
export interface editParams {
    id: string;
};