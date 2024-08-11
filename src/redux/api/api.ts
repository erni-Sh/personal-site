import { createApi, FetchArgs, fetchBaseQuery, retry } from '@reduxjs/toolkit/query';
import { API_WP_URL } from '@/redux/api/apiResoursePaths';
import { MAX_RETRIES_REFETCH, TIME_TO_ABORT_BASE_FETCH } from '@/system/settings';

const WordPressQuery = retry(
  async (args: string | FetchArgs, api, extraOptions) => {
    const result = await fetchBaseQuery({
      baseUrl: API_WP_URL,
      timeout: TIME_TO_ABORT_BASE_FETCH,
      // prepareHeaders: headers => {
      //   headers.set('authorization', FDAuthorization)
      //   return headers
      // },
    })(args, api, extraOptions)

    if (
      result?.error &&
      !['FETCH_ERROR', 500, 502].includes(result.error?.status)
    )
      retry.fail(result.error)
    return result
  },
  { maxRetries: MAX_RETRIES_REFETCH },
)

export const WordPressAPI = createApi({
  reducerPath: 'FreshDeskAPI',
  baseQuery: WordPressQuery,
  endpoints: () => ({}),
})
