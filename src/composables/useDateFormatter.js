export function useDateFormatter() {
  function formatDate(dateString) {
    if (!dateString) return 'N/A'

    const date = new Date(dateString)

    if (Number.isNaN(date.getTime())) {
      return dateString
    }

    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date)
  }

  return { formatDate }
}
