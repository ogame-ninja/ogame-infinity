import{requestOGameAlliances}from"../services/request.ogameAlliances.js";export function getAlliances(protocol, host, universe, universeNum, universeLang){const alliancePromise=requestOGameAlliances(protocol, host, universe, universeNum, universeLang).then(toAllianceResponseMap);return alliancePromise.then(toAllianceInformation)}function toAllianceInformation(allianceInformation){const playersIDs=[...allianceInformation.entries()].reduce(((acc,[allyID,allyData])=>{allyData.players.forEach((playerID=>acc.set(playerID,allyID)));return acc}),new Map);return{alliances:allianceInformation,players:playersIDs}}function toAllianceResponseMap(response){const doc=response.document.documentElement;return Array.from(doc.childNodes).reduce(((acc,node)=>acc.set(Number(node.getAttribute("id")),{id:Number(node.getAttribute("id")),name:node.getAttribute("name"),tag:node.getAttribute("tag"),players:Array.from(node.childNodes).map((n=>Number(n.getAttribute("id"))))})),new Map)}