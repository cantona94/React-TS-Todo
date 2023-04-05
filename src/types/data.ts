export interface ITodo {
    id: string;
    title: string;
    complete: boolean;
};

 export interface TodosState {
    list: ITodo[];
  }