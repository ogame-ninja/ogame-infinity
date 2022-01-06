export function waitFor(predicateCallback,checkIntervals=10,timeout=5e3){return new Promise(((resolve,reject)=>{let timeoutId=NaN;const intervalId=setInterval((()=>{if(predicateCallback()){clearInterval(intervalId);clearTimeout(timeoutId);resolve(true)}}),checkIntervals);timeoutId=setTimeout((()=>{clearInterval(intervalId);clearTimeout(timeoutId);reject(new Error("Wait for timeout exception"))}),timeout)}))}export function waitForDefinition(object,propertyKey,checkIntervals=10,timeout=5e3){return waitFor((()=>Object.hasOwn(object,propertyKey)),checkIntervals,timeout)}export function waitForQuerySelector(selector,checkIntervals=10,timeout=5e3){return waitFor((()=>document.querySelector(selector)!==null),checkIntervals,timeout).then((()=>document.querySelector(selector)))}export function delay(time){return new Promise((resolve=>{setTimeout(resolve,time,undefined)}))}