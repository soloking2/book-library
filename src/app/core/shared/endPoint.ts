const BASE_URL = 'http://openlibrary.org';
export const Endpoint = {
  BOOK_LIBRARY: {
    get_by_subjects: (subjectName: string) =>
      `${BASE_URL}/subjects/${subjectName}.json`,
    get_book_detail: (workId: string) => `${BASE_URL}/${workId}.json`,
  },
};
