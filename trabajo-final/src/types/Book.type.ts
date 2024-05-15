export interface Author {
  name: string;
  birth_year: number;
  death_year: number;
}

export type Book = {
  id: number;
  title: string;
  authors: Author[];
  translators: [];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean;
  media_type: string;
  formats: Record<string, string>;
  download_count: number;
};
