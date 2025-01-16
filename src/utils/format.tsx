import moment from "moment";

export const DATETIME_FORMAT = "lll";

export function formatRelative(dateTime: moment.Moment) {
  const now = moment();
  const diff = now.diff(moment(dateTime), "days");

  if (diff < 1) {
    return moment(dateTime).fromNow(); // e.g. "15 minutes ago"
  } else {
    return moment(dateTime).format(DATETIME_FORMAT); // e.g. "Jan 15, 2025 10:00 AM"
  }
}
