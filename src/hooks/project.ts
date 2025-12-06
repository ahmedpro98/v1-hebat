
export interface DetailItem {
    title: string;
    content: string;
}

export interface ProjectType {
    title: string;
    subtitle: string;
    description: string;
    year: string;
    category: string;
    client: string;
    location: string;
    mainImage: string;
    gallery: string[];
    details: DetailItem[];
}
