import { fetchXml } from "../../util/fetching.js";

export function requestOGamePlanets(protocol, host, universe, universeNum, universeLang) {
  const url = new URL(`${protocol}//${host}/api/s${universeNum}/${universeLang}/universe.xml`);

  return fetchXml(url, { method: "GET" });
}
