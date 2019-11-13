import {createStore} from 'redux';
import Reducers from './reducers'

initialState = () => {
    return {
        company: {
            name: 'Comercial Mexicana',
            username: 'pancake',
            password: 'kitten',
            employees: [
                {
                    id: 1,
                    name: 'Joel Alejando',
                    lastName: 'Hernandez Ruvalcaba',
                    status: 'ASSISTED',
                    image: 'https://jis.gov.jm/media/2019/03/Rick-Harris-670x450.jpg',
                    code: '123456'
                },
                {
                    id: 2,
                    name: 'Naomi',
                    lastName: 'Barajas Lopez',
                    status: 'CHECKING',
                    image: 'https://i.pinimg.com/originals/3f/a1/a4/3fa1a41c46c8e9c5e1cd763a894b8ea8.jpg',
                    code: '123457'
                },
                {
                    id: 3,
                    name: 'Daniel',
                    lastName: 'Gomez Morelos',
                    status: 'AUSENT',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoOkMItTcSwQLfyHk7PoR7Hm2hXaz6RilIznjWWjZzaf4qNalb&s',
                    code: '123458'
                },
            ]
        }
    }
}

export default configureStore = () => {
    let store = createStore(Reducers, initialState() )
    return store
}

