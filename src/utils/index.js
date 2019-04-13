const ipfsClient = require('ipfs-http-client')
// const fileReaderPullStream = require('pull-file-reader')

export const initClient = (host, port, protocol) => {
  return ipfsClient('/ip4/127.0.0.1/tcp/5002/http')
}

// const saveToIpfsWithFilename = (file) => {
//   let ipfsId
//   const fileStream = fileReaderPullStream(file)
//   const fileDetails = {
//     path: file.name,
//     content: fileStream
//   }
//   const options = {
//     wrapWithDirectory: true,
//     progress: (prog) => console.log(`received: ${prog}`)
//   }
//   this.ipfs.add(fileDetails, options)
//     .then((response) => {
//       console.log(response)
//       // CID of wrapping directory is returned last
//       ipfsId = response[response.length - 1].hash
//       console.log(ipfsId)
//       this.setState({added_file_hash: ipfsId})
//     }).catch((err) => {
//       console.error(err)
//     })
// }
