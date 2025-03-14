import { fetchXml } from "../../util/fetching.js";

/**
 *
 * @param {string} universe sub part of domain server. Ejm: s1-es, s180-us
 * @return {Promise<FetchResponse<Document>>} XML
 */
export function requestOGamePlayers(protocol, host, universe, universeNum, universeLang) {
  const url = new URL(`${protocol}//${host}/api/s${universeNum}/${universeLang}/players.xml`);

  return fetchXml(url, { method: "GET" });
}
