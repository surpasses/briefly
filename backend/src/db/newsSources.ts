// Maps the name of news to the id of the news source in the database
export const NEWS_SOURCE_NAME_TO_ID = {
  'news.com.au': 1,
  abc: 2,
  smh: 3,
} as const

export type NewsSourceName = keyof typeof NEWS_SOURCE_NAME_TO_ID

export function getNewsId(name: string): number | null {
  return (NEWS_SOURCE_NAME_TO_ID as Record<string, number>)[name] ?? null
}
