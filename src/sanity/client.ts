import {createClient} from 'next-sanity'

export const client = createClient({
  projectId: 'kq8u4eya',
  dataset: 'production',
  apiVersion: '2024-11-01',
  useCdn: false,
})
