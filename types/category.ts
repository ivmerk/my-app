export type Category = {
        name: string;
        slug: string;
        parent: ParentСategory | null;
        uid: string;
};

type ParentСategory = {
        name: string;
        slug: string;
        uid: string;
};
