import {createStore} from 'redux';
import moment from 'moment';
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
                    code: '',
                    schedule: [
                        {
                            id: 1,
                            time: {
                                hour: 10,
                                minute: 30
                            }, // 24 hrs format
                            type: 'Ingreso',
                            status: 'CHECKING',
                        },
                        {
                            id: 2,
                            time: {
                                hour: 11,
                                minute: 36
                            }, // 24 hrs format
                            type: 'Reporte',
                            status: 'CHECKING',
                        },
                        {
                            id: 3,
                            time: {
                                hour: 12,
                                minute: 22
                            }, // 24 hrs format
                            type: 'Reporte',
                            status: 'CHECKING',
                        },
                        {
                            id: 4,
                            time: {
                                hour: 16,
                                minute: 30
                            }, // 24 hrs format
                            type: 'Reporte',
                            registeredTime: moment(),
                            status: 'CHECKING',
                        },
                        {
                            id: 5,
                            time: {
                                hour: 17,
                                minute: 25
                            }, // 24 hrs format
                            type: 'Salida',
                            status: 'CHECKING',
                        },
                    ]
                },
                {
                    id: 2,
                    name: 'Naomi',
                    lastName: 'Barajas Lopez',
                    status: 'CHECKING',
                    image: 'https://i.pinimg.com/originals/3f/a1/a4/3fa1a41c46c8e9c5e1cd763a894b8ea8.jpg',
                    code: '',
                    schedule: [
                        {
                            id: 1,
                            time: {
                                hour: 9,
                                minute: 40
                            }, // 24 hrs format
                            type: 'Ingreso',
                            status: 'CHECKING',
                        },
                        {
                            id: 2,
                            time: {
                                hour: 11,
                                minute: 36
                            }, // 24 hrs format
                            type: 'Reporte',
                            status: 'CHECKING',
                        },
                        {
                            id: 3,
                            time: {
                                hour: 12,
                                minute: 22
                            }, // 24 hrs format
                            type: 'Reporte',
                            status: 'CHECKING',
                        },
                        {
                            id: 4,
                            time: {
                                hour: 16,
                                minute: 30
                            }, // 24 hrs format
                            type: 'Reporte',
                            registeredTime: moment(),
                            status: 'CHECKING',
                        },
                        {
                            id: 5,
                            time: {
                                hour: 17,
                                minute: 25
                            }, // 24 hrs format
                            type: 'Salida',
                            status: 'CHECKING',
                        },
                    ]
                },
                {
                    id: 3,
                    name: 'Daniel',
                    lastName: 'Gomez Morelos',
                    status: 'AUSENT',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoOkMItTcSwQLfyHk7PoR7Hm2hXaz6RilIznjWWjZzaf4qNalb&s',
                    code: '',
                    schedule: [
                        {
                            id: 1,
                            time: {
                                hour: 9,
                                minute: 50
                            }, // 24 hrs format
                            type: 'Ingreso',
                            status: 'CHECKING',
                        },
                        {
                            id: 2,
                            time: {
                                hour: 11,
                                minute: 36
                            }, // 24 hrs format
                            type: 'Reporte',
                            status: 'CHECKING',
                        },
                        {
                            id: 3,
                            time: {
                                hour: 12,
                                minute: 22
                            }, // 24 hrs format
                            type: 'Reporte',
                            status: 'CHECKING',
                        },
                        {
                            id: 4,
                            time: {
                                hour: 16,
                                minute: 30
                            }, // 24 hrs format
                            type: 'Reporte',
                            registeredTime: moment(),
                            status: 'CHECKING',
                        },
                        {
                            id: 5,
                            time: {
                                hour: 17,
                                minute: 25
                            }, // 24 hrs format
                            type: 'Salida',
                            status: 'CHECKING',
                        },
                    ]
                },
                {
                    id: 4,
                    name: 'Joel Alejando',
                    lastName: 'Hernandez Ruvalcaba',
                    status: 'ASSISTED',
                    image: 'https://jis.gov.jm/media/2019/03/Rick-Harris-670x450.jpg',
                    code: '123456',
                    schedule: [
                        {
                            id: 1,
                            time: {
                                hour: 9,
                                minute: 20
                            }, // 24 hrs format
                            type: 'Ingreso',
                            status: 'CHECKING',
                        },
                        {
                            id: 2,
                            time: {
                                hour: 11,
                                minute: 36
                            }, // 24 hrs format
                            type: 'Reporte',
                            status: 'CHECKING',
                        },
                        {
                            id: 3,
                            time: {
                                hour: 12,
                                minute: 22
                            }, // 24 hrs format
                            type: 'Reporte',
                            status: 'CHECKING',
                        },
                        {
                            id: 4,
                            time: {
                                hour: 16,
                                minute: 30
                            }, // 24 hrs format
                            type: 'Reporte',
                            registeredTime: moment(),
                            status: 'CHECKING',
                        },
                        {
                            id: 5,
                            time: {
                                hour: 17,
                                minute: 25
                            }, // 24 hrs format
                            type: 'Salida',
                            status: 'CHECKING',
                        },
                    ]
                },
                {
                    id: 5,
                    name: 'Naomi',
                    lastName: 'Barajas Lopez',
                    status: 'CHECKING',
                    image: 'https://i.pinimg.com/originals/3f/a1/a4/3fa1a41c46c8e9c5e1cd763a894b8ea8.jpg',
                    code: '123457',
                    schedule: [
                        {
                            id: 1,
                            time: {
                                hour: 9,
                                minute: 20
                            }, // 24 hrs format
                            type: 'Ingreso',
                            status: 'CHECKING',
                        },
                        {
                            id: 2,
                            time: {
                                hour: 11,
                                minute: 36
                            }, // 24 hrs format
                            type: 'Reporte',
                            status: 'CHECKING',
                        },
                        {
                            id: 3,
                            time: {
                                hour: 12,
                                minute: 22
                            }, // 24 hrs format
                            type: 'Reporte',
                            status: 'CHECKING',
                        },
                        {
                            id: 4,
                            time: {
                                hour: 16,
                                minute: 30
                            }, // 24 hrs format
                            type: 'Reporte',
                            registeredTime: moment(),
                            status: 'CHECKING',
                        },
                        {
                            id: 5,
                            time: {
                                hour: 17,
                                minute: 25
                            }, // 24 hrs format
                            type: 'Salida',
                            status: 'CHECKING',
                        },
                    ]
                },
                {
                    id: 6,
                    name: 'Daniel',
                    lastName: 'Gomez Morelos',
                    status: 'AUSENT',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoOkMItTcSwQLfyHk7PoR7Hm2hXaz6RilIznjWWjZzaf4qNalb&s',
                    code: '123458',
                    schedule: [
                        {
                            id: 1,
                            time: {
                                hour: 9,
                                minute: 20
                            }, // 24 hrs format
                            type: 'Ingreso',
                            status: 'CHECKING',
                        },
                        {
                            id: 2,
                            time: {
                                hour: 11,
                                minute: 36
                            }, // 24 hrs format
                            type: 'Reporte',
                            status: 'CHECKING',
                        },
                        {
                            id: 3,
                            time: {
                                hour: 12,
                                minute: 22
                            }, // 24 hrs format
                            type: 'Reporte',
                            status: 'CHECKING',
                        },
                        {
                            id: 4,
                            time: {
                                hour: 16,
                                minute: 30
                            }, // 24 hrs format
                            type: 'Reporte',
                            registeredTime: moment(),
                            status: 'CHECKING',
                        },
                        {
                            id: 5,
                            time: {
                                hour: 17,
                                minute: 25
                            }, // 24 hrs format
                            type: 'Salida',
                            status: 'CHECKING',
                        },
                    ]
                },
            ]
        }
    }
}

export default configureStore = () => {
    let store = createStore(Reducers, initialState() )
    return store
}

