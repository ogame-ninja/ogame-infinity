import{requestOGamePlayers}from"../services/request.ogamePlayers.js";export const DEFAULT_PLAYER={name:"<?>",alliance:null,status:"",id:-1};export function getPlayers(protocol, host, universe, universeNum, universeLang){const responsePromise=requestOGamePlayers(protocol, host, universe, universeNum, universeLang).then(toPlayerResponse);return responsePromise.then(toPlayerInformation)}function toPlayerInformation(players){return players.reduce(((acc,player)=>acc.set(player.id,player)),new Map)}function toPlayerResponse(response){const doc=response.document.documentElement;return Array.from(doc.childNodes).map((node=>({id:parseInt(node.getAttribute("id"),10),name:node.getAttribute("name"),alliance:node.hasAttribute("alliance")?parseInt(node.getAttribute("alliance"),10):null,status:node.getAttribute("status")??""})))}