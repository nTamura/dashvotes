import { DateTime } from 'luxon'

export const toDate = arg => {
  const timestamp = Number(arg)
  const dt = DateTime.fromMillis(timestamp)
  const format = Object.assign({ weekday: 'short' }, DateTime.DATE_MED)
  return dt.toLocaleString(format)
}

export default toDate
