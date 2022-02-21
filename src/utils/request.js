export async function getIpInfo(params, requestType = 'ip') {
    let type = requestType === 'ip' ? 'ipAddress' : requestType === 'email' ? 'email' : 'domain'
    let url = `https://geo.ipify.org/api/v1?apiKey=at_QXEgcC6t4aTAC5qImjIRt9jkcFt8d&${type}=${params}`

    let response = await fetch(url)
    return response.json()
}