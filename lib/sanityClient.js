import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'a52mcbkk',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skxBOZnBRuzbvLlOIRhr10w4F2wOi6VDaekbpBIfYW2Zkz8xXJvnJdpWjn3O5gEH7fPNc0vQsPsZG3k1GYWzKvr17qRQCnbn2ANFrAvsJIkQVb1durm9lNXVyPNXXaGKQ1e3Jxv3tPlHtSNbVmHbd4QrrfN0n99v5ffjoB0jjzkLss5FEhfX',
  useCdn: false,
})
