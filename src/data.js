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
      name: 'CrossFit',
      description:
        'A form of high intensity interval training, CrossFit is a strength and conditioning workout that is made up of functional movement performed at a high intensity level.',
      objective:
        'Optimizing the trainee’s physical competence in each of ten recognized fitness domains: Cardiovascular and Respiratory Endurance, Stamina, Strength, Flexibility, Power, Speed, Coordination, Agility, Balance and Accuracy. ',
      duration: 45,
      intensity: 'High',
      url: '/classes/crossfit',
      mainImg: crossMain,
    },
    {
      id: uuidv4(),
      name: 'Strongman',
      description:
        'Strongman competitors lift odd objects and extremely heavy weight,but the majority of events are founded on the basics: squat,deadlift, and press.',
      objective:
        'It is thought to be an ideal foundation to branch off into other strength and muscle-focused activities.',
      duration: 45,
      intensity: 'High',
      url: '/classes/strongman',
      mainImg: strongMain,
    },
    {
      id: uuidv4(),
      name: 'Gymnastics',
      description:
        'Gymnastics is a sport that includes physical exercises requiring balance, strength, flexibility, agility, coordination,dedication and endurance.',
      objective:
        'Promoting balance and co-ordination. Developing strength, improving flexibility. Improving body posture.',
      duration: 45,
      intensity: 'High',
      url: '/classes/gymnastic',
      mainImg: gymnasticMain,
    },
    {
      id: uuidv4(),
      name: 'Weightlifting',
      description:
        'Weightlifting is an athletic discipline which requires lifting of heavy weights in a progressive manner.',
      objective:
        'Weight training provides a stress to the muscles that causes them to adapt and get stronger.',
      duration: 45,
      intensity: 'High',
      url: '/classes/weightlifting',
      mainImg: wlMain,
    },
  ]
}
