import { useState, useEffect } from "react";
import { fetchJobs } from "../lib/graphql/queries";

export function useJobs() {
  const [jobs, setJobs] = useState([]);
  //   test
  //   console.log("[Home] jobs:", jobs);

  // fetch jobs from graphql api
  useEffect(() => {
    fetchJobs().then((data) => setJobs(data));
  }, []); //[] tells react to run this effect only once when the component mounts

  return jobs;
}
