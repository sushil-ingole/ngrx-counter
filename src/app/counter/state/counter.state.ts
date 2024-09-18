export interface ICounter {
    counter: number;
    userName?: string;
}

export const initialState: ICounter = {
    counter: 4,
    userName: 'Sushil1'
}