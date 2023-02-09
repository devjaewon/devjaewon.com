export interface AsEngineer {
    text: string;
}

export interface WorkProject {
    title: string;
    description: string;
    skills: Array<string>;
}

export interface WorkExperience {
    period: string;
    logo: {
        imageUrl: string;
        useBorder: boolean;
    }
    corp: string;
    position: string;
    summary: string;
    role: string;
    projects: Array<WorkProject>;
}

export interface Education {
    period: string;
    logo: {
        imageUrl: string;
        useBorder: boolean;
    }
    organizer: string;
    course: string;
    summary: string;
};
