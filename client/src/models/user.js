/** @flow */

type IUser = {
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

export type { IUser };
