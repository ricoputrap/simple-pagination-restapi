export const paginateResult = (data) => {
  return (req, res, next) => {

    // request params ?page=1&limit=5
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const result = {
      result: data.slice(startIndex, endIndex),
    }

    // current `page` is not the last page
    if (endIndex < data.length) {
      result.next = {
        page: page + 1,
        limit: limit
      }
    }

    // current `page` is not the first page
    if (startIndex > 0) {
      result.previous = {
        page: page - 1,
        limit: limit
      }
    }

    res.paginatedResult = result;
    next();
  }
}