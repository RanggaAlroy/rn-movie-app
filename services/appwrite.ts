// track the searches made by user

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;


export const updateSearchCount = async (query: string, movie: Movie) => {
    //check if a record of that search already stored
    const result = await
};
