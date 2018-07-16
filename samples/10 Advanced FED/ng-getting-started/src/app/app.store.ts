export interface AppState {
  contacts: Contact[];
}

export interface Contact {
  id: number;
  name: string;
}

export const appStore: AppState = {
  contacts: [
    {id:1, name: "Ori"},
    {id:2, name: "Roni"},
  ]
}
