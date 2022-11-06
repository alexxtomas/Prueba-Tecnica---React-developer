export const getTotalPages = (content, howManyContentPerPage) => Math.ceil((content.length / howManyContentPerPage).toFixed(1))
