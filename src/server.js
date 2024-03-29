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
      this.get("/api/jobs/search", (schema, request) => {
        let jobs = schema.db.job;
        const search = String(request.queryParams?.["search"] || "");
        if (search) {
          jobs = jobs.filter(
            ({
              category,
              candidate_required_location,
              job_type,
              company_name,
            }) => {
              return (
                category.toLowerCase().includes(search) ||
                candidate_required_location.toLowerCase().includes(search) ||
                job_type.toLowerCase().includes(search) ||
                company_name.toLowerCase().includes(search)
              );
            }
          );
        }
        return jobs;
      });

      this.get("/api/jobs", (schema, request) => {
        const location = String(request.queryParams?.["location"] || "");
        const category = String(request.queryParams?.["category"] || "");
        const job_type = String(request.queryParams?.["job_type"] || "");

        let jobs = schema.db.job;

        if (location) {
          const filter = location.split(",");
          jobs = jobs.filter(({ candidate_required_location }) => {
            return filter.some((substring) =>
              candidate_required_location.toLowerCase().includes(substring)
            );
          });
        }

        if (category) {
          const filter = category.split(",");
          jobs = jobs.filter(({ category }) => {
            return filter.some((substring) =>
              category.toLowerCase().includes(substring)
            );
          });
        }
        if (job_type) {
          const filter = job_type.split(",");
          jobs = jobs.filter(({ job_type }) => {
            return filter.some((substring) =>
              job_type.toLowerCase().includes(substring)
            );
          });
        }

        return jobs;
      });
    },
  });
}
