import { format } from "date-fns";

/**
 * 
 * @param {String} str 
 * @param {Srting} type 
 */
export function formatDate(str, type) {
  const date = new Date(str);
  return format(date, type);
}
