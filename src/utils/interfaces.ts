export interface QuoteProps {
    quoteCategory: string;
    quoteText: string;
    author: string;
    tags: (string)[];
    background?: string
}

interface Tags {
    name: string
}

export interface Details {
    quoteString: string;
    author: string;
    tags: Tags[];
    background?: string
}

export interface QuoteCat {
    name: string;
}