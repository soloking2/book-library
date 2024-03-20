export interface IApiResponse<T> {
  key: string;
  name: string;
  subject_type: string;
  work_count: number;
  works: T;
}
export interface IBook {
  key: string;
  title: string;
  edition_count: number;
  cover_id: number;
  cover_edition_key: string;
  subject: string[];
  ia_collection: string[];
  lendinglibrary: boolean;
  printdisabled: boolean;
  lending_edition: string;
  lending_identifier: string;
  authors: Array<{
    key: string;
    name: string;
  }>;
  first_publish_year: number;
  ia: string;
  public_scan: boolean;
  has_fulltext: boolean;
  availability: {
    status: string;
    available_to_browse: boolean;
    available_to_borrow: boolean;
    available_to_waitlist: boolean;
    is_printdisabled: boolean;
    is_readable: boolean;
    is_lendable: boolean;
    is_previewable: boolean;
    identifier: string;
    isbn: unknown;
    oclc: unknown;
    openlibrary_work: string;
    openlibrary_edition: string;
    last_loan_date: unknown;
    num_waitlist: unknown;
    last_waitlist_date: unknown;
    is_restricted: boolean;
    is_browseable: boolean;
    __src__: string;
  };
}
