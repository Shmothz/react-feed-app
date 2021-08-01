let initialState = {
  profileData: {
    firstName: 'Sylvanas',
    secondName: 'Windrunner',
    birthday: undefined,
    avatar: 'https://yobte.ru/uploads/posts/2019-11/silvana-53-foto-1.jpg',
    status: 'Hey, elf, your Teldrassil is on fire!',
    country: 'The East Kingdom',
    city: 'Undercity'
  }
}

export const profileReducer = (state = initialState,action) => {
  return state
}