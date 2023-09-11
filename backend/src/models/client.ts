import { Client } from "@elastic/elasticsearch";

const esClient = new Client({ node: "http://es:9200" });

export default esClient;