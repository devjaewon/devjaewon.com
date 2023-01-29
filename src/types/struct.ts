export interface WorkProject {
    title: string;
    description: string;
}

export interface WorkExperience {
    period: string;
    corp: string;
    position: string;
    summary: Array<string>;
    projects: Array<WorkProject>;
}
