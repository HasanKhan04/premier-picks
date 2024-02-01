export interface DataProps {
    name: string,
    image: string,
    code: string
};

export interface CardGridProps {
    data: DataProps[] | [];
};

export interface CardProps {
    name: string,
    image: string,
    code: string

}

export interface Player {
    name: string,
    nation: string,
    pos: string,
    age: number,
    mp: number,
    starts: number,
    mins: number,
    goals: number,
    assists: number,
    pk: number,
    yellows: number,
    reds: number,
    team: string
}

export interface RequestProps {
    team: string | null,
    pos: string | null,
    nation: string | null,
    name: string | null
}
