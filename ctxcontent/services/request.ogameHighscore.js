import { fetchXml } from "../../util/fetching.js";

export const HIGHSCORE_CATEGORY = Object.freeze({
  PLAYER: 1,
  ALLIANCE: 2,
});

export const HIGHSCORE_TYPE = Object.freeze({
  TOTAL: 0,
  ECONOMY: 1,
  RESEARCH: 2,
  MILITARY: 3,
  MILITARY_BUILT: 5,
  MILITARY_DESTROYED: 6,
  MILITARY_LOST: 4,
  HONOR: 7,
  LIFEFORM: 8,
});

/**
 * @param {string} universe sub part of domain server. Ejm: s1-es, s180-us
 * @param {typeof HIGHSCORE_CATEGORY} category
 * @param {typeof HIGHSCORE_TYPE} type
 * @return {Promise<FetchResponse<Document>>} XML
 */
export function requestOGameHighScore(protocol, host, universe, category, type, universeNum, universeLang) {
  const url = new URL(`${protocol}//${host}/api/s${universeNum}/${universeLang}/highscore.xml`);
  url.searchParams.set("category", category);
  url.searchParams.set("type", type);

  return fetchXml(url, { method: "GET" });
}
