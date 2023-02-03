export * from "@prisma/client";

export interface AsEngineer {
    text: string;
}

export interface WorkProject {
    title: string;
    description: string;
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
