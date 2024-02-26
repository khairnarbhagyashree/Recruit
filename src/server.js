import { createServer, Model } from "miragejs";
import jobdata from "./assets/remotejob.json";

export function makeServer({ environment = "test" }) {
  return createServer({
    environment,

    models: {
      job: Model,
    },

    seeds(server) {
      server.db.loadData({
        job: jobdata["jobs"],
      });
    },

    routes() {
      this.get("/api/jobs", (schema, request) => {
        const location = String(request.queryParams?.["location"] || "");
        let jobs = schema.db.job;
        if (location) {
          const filter = location.split(",");
          jobs = jobs.filter(({ candidate_required_location }) => {
            return filter.some((substring) =>
              candidate_required_location.toLowerCase().includes(substring)
            );
          });
        }
        return jobs;
      });
    },
  });
}
