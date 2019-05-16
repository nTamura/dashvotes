const initState = {
  polls: [
    {
      id: 785632,
      title: 'Where in the world is waldo',
      description: 'Where could he be',
      options: ['Africa', 'Canada', 'Japan'],
      createdBy: 'Nix',
      createdAt: Date.now(),
      expireAt: '',
      isPublic: true,
    },
    {
      id: 553795,
      title: 'How many chucks could a woodchuck chuck',
      description: 'If a woodchuck could chuck wood',
      options: [12, 53, 374, 575],
      createdBy: 'Nix',
      createdAt: Date.now(),
      expireAt: '',
      isPublic: true,
    },
    {
      id: 543684,
      title: 'React, Vue, Angular?',
      description: '',
      options: ['React', 'Vue', 'Angular'],
      createdBy: 'Nix',
      createdAt: Date.now(),
      expireAt: '',
      isPublic: true,
    },
  ],
}

const pollsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_POLL':
      console.log('success')
      return state
    case 'CREATE_POLL_ERR':
      console.log('create poll error', action.err)
      return state
    default:
      return state
  }
}

export default pollsReducer
