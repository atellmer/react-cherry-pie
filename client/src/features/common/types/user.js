/** @flow */

type UserType = {
  id: string,
  name: {
    first: string,
    last: string
  },
  avatar: {
    thumbnail: string
  },
  online: boolean
}

export type { UserType };
