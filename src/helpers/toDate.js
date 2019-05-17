import { DateTime } from 'luxon'

export const toDate = timestamp => {
  const dt = DateTime.fromMillis(timestamp)
  const format = Object.assign({ weekday: 'short' }, DateTime.DATE_MED)
  return dt.toLocaleString(format)
}

export default toDate
