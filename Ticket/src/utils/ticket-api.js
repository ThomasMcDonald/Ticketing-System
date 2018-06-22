import axios from 'axios'
const baseURl = 'http://localhost:3333'

export { getTickets, addTicket, deleteTicket }

function getTickets () {
  const url = `${baseURl}/api/tickets`
  return axios.get(url).then(response => response.data.tickets)
}

function addTicket (params) {
  const url = `${baseURl}/api/addticket`
  return axios.post(url, { params: params })
}

// Delete Ticket, probably not necessary but I did it
function deleteTicket (id) {
  const url = `${baseURl}/api/deleteticket/` + id
  return axios.post(url)
}
