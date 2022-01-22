import { v4 as uuidv4 } from 'uuid'

// Images
import crossMain from './img/crossMain.jpeg'
import strongMain from './img/strongMain.jpeg'
import gymnasticMain from './img/gymnasticMain.jpg'
import wlMain from './img/wlMain.jpeg'

export const PlanList = () => {
  return [
    {
      id: uuidv4(),
      name: 'Only Morning',
      description: 'Access to the gym from 6am to 14pm',
      price: 30,
    },
    {
      id: uuidv4(),
      name: 'Only Afternoon',
      description: 'Access to the gym from 14pm to 0am',
      price: 40,
    },
    {
      id: uuidv4(),
      name: 'Standard',
      description: 'Access to the gym from 6am to 14pm',
      price: 60,
    },
    {
      id: uuidv4(),
      name: 'Pro Training',
      description: 'Access to the gym from 6am to 14pm',
      price: 80,
    },
    {
      id: uuidv4(),
      name: 'ELITE Training',
      description: 'Access to the gym from 6am to 14pm',
      price: 100,
    },
  ]
}

export const ClassesList = () => {
  return [
    {
      id: uuidv4(),
      name: 'Crossfit',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos natus nesciunt qui quae nobis cum molestiae cumque mollitia autem?',
      url: '/classes/crossfit',
      mainImg: crossMain,
    },
    {
      id: uuidv4(),
      name: 'Strongman',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos natus nesciunt qui quae nobis cum molestiae cumque mollitia autem?',
      url: '/classes/strongman',
      mainImg: strongMain,
    },
    {
      id: uuidv4(),
      name: 'Gymnastics',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos natus nesciunt qui quae nobis cum molestiae cumque mollitia autem?',
      url: '/classes/gymnastic',
      mainImg: gymnasticMain,
    },
    {
      id: uuidv4(),
      name: 'Weightlifting',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos natus nesciunt qui quae nobis cum molestiae cumque mollitia autem?',
      url: '/classes/weightlifting',
      mainImg: wlMain,
    },
  ]
}
