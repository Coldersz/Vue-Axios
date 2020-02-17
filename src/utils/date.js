const MINUTE = 60,
  HOUR = MINUTE * 60,
  DAY = HOUR * 24

export default {
  since(date) {
    const delta = Math.round((+new Date() - date) / 1000)

    var since

    if (delta < 30) {
      since = 'just then.'
    } else if (delta < MINUTE) {
      since = delta + ' seconds ago.'
    } else if (delta < 2 * MINUTE) {
      since = 'a minute ago.'
    } else if (delta < HOUR) {
      since = Math.floor(delta / MINUTE) + ' minutes ago.'
    } else if (Math.floor(delta / HOUR) == 1) {
      since = '1 hour ago.'
    } else if (delta < DAY) {
      since = Math.floor(delta / HOUR) + ' hours ago.'
    } else if (delta < DAY * 2) {
      since = 'yesterday'
    }

    return since
  }
}
