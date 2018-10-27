if(typeof window !=='undefined')console.error('You SHOULD NOT require proxy-table.js in client-side js!!!');
module.exports = {
  a1: {
    portal: "http://a1-api.<%=options.domain%>"
  },
  a2: {
    portal: "http://a2-api.<%=options.domain%>"
  },
  a3: {
    portal: "http://a3-api.<%=options.domain%>"
  },
  prod: {
    portal: "http://api.<%=options.domain%>"
  }
}