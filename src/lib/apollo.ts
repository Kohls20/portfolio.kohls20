import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4ulzu0m0yxa01ueb2nn6s3w/master",
    cache: new InMemoryCache(),
});
