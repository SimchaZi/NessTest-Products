import { LOADING_PRISTINE } from '@/shared/constants'

const asyncArrayConstructor = () => {
  return {
    loadingState: LOADING_PRISTINE,
    data: [],
    error: null
  }
}

export {
  asyncArrayConstructor
}
