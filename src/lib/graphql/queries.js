import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient("http://localhost:9000/graphql");

// fetch jobs
export async function fetchJobs() {
    const query = gql`
    query {
        jobs {
            id
            icon
            time
            title
            companyName
            jobType
            structure
            salary
            location
    }
}
    `;
    // call the graphql api
    const data = await client.request(query);
    return data.jobs;
}