import { fetchXml } from "../../util/fetching.js";

/**
 *
 * @param {string} universe
 * @return {Promise<FetchResponse<Document>>}
 */
export function requestOGameAlliances(protocol, host, universe, universeNum, universeLang) {
  const url = new URL(`${protocol}//${host}/api/s${universeNum}/${universeLang}/alliances.xml`);

  return fetchXml(url, { method: "GET" });
}
