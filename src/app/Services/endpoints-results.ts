export interface LoginResult {
    token: string;
    users: Array<LoginUserInformation>
}

export interface LoginUserInformation{
    id: number;
    name: string;
    avatarUrl: string;
}

export interface UserChosen {
    popular: Array<number>;
    keepWatching: Array<number>
}

export interface ShowInformation{
    cardImage: string;
    titleImage: string;
    backgroundImage: string;
    relevance: number;
    year: number;
    minAge: number;
    time: number;
    season?: number;
    description: string;
    cast: Array<string>;
    genre: Array<string>;
    scenes: Array<string>;
}