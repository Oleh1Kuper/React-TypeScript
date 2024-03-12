import axios, { AxiosRequestConfig } from 'axios';

export type FetchResponse<T> = {
  count: number;
  next: string | null;
  results: T[];
};

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '50ca9fd9a7824ce2bd2ce863194a9f5d',
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (requestConfig?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, requestConfig)
      .then(({ data }) => data);
  };

  getSingle = (slug: string) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${slug}`)
      .then(({ data }) => data);
  };
}

export default APIClient;
