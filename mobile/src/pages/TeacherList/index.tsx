import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, ScrollView } from 'react-native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-community/async-storage'

import api from '../../services/api'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem' 

import styles from './styles'

function TeacherList() {
    const [ teachers, setTeachers ] = useState([])

    const [ favorites, setFavorites ] = useState<number[]>([])

    const [ subject, setSubject ] = useState('')
    const [ week_day, setWeekDay ] = useState('')
    const [ time, setTime ] = useState('')

    const [isFilterVisible, setIsFilterVisible] = useState(false)

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then( response => {
            if (response) {
                
                const favoritedTeachers = JSON.parse(response)
                const favoritedTeachersIds = favoritedTeachers.map( 
                    (teacher: Teacher) => teacher.id 
                )
                setFavorites(favoritedTeachersIds)
            }
        });
    }

    function handleToggleFilterVisible() {
        setIsFilterVisible(!isFilterVisible)
    }

    async function handleFilterSubmit() {
        loadFavorites();

        const response = await api.get("classes", {
            params: {
            subject,
            week_day,
            time
            }
        })
        
        setIsFilterVisible(false)
        setTeachers(response.data)
    }
    
    return (
        <View style={ styles.container }> 
                
            <PageHeader 
                title="Proffys disponíveis"
                headerFilter={ (
                
                    <BorderlessButton onPress={ handleToggleFilterVisible }>

                        <Feather 
                            name="filter" 
                            size={22} 
                            color={isFilterVisible ? "#04c461" : "#FFF"}
                        />

                    </BorderlessButton>
                
                )}
            >

                { isFilterVisible && (

                    <View style={ styles.searchForm }>

                        <Text style={ styles.label }>Matéria</Text>

                        <TextInput 
                            style={ styles.input } 
                            placeholder="Qual máteria deseja?"
                            placeholderTextColor = '#c1bcc0'

                            value={ subject }
                            onChangeText={ text => setSubject(text) }
                        />


                        <View style={ styles.inputGroup }>
                            
                            <View style={ styles.inputBlock }>

                                <Text style={ styles.label }>Dia da semana</Text>

                                <TextInput 
                                    style={ styles.input } 
                                    placeholder="Qual dia?"
                                    placeholderTextColor = '#c1bcc0'

                                    value={ week_day }
                                    onChangeText={ text => setWeekDay(text) }
                                />

                            </View>

                            <View style={ styles.inputBlock }>

                                <Text style={ styles.label }>Horário</Text>

                                <TextInput 
                                    style={ styles.input } 
                                    placeholder="Qual horário?"
                                    placeholderTextColor = '#c1bcc0'

                                    value={ time }
                                    onChangeText={ text => setTime(text) }
                                />

                            </View>

                        </View>

                        <RectButton style={ styles.submitButton } onPress={ handleFilterSubmit }>
                            
                            <Text style={ styles.submitButtonText }>Pesquisar</Text>

                        </RectButton>

                    </View>

                )}

            </PageHeader>

            <ScrollView 
                style={ styles.teacherList } 
                contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
            >
        
                { teachers.map( (teacher: Teacher) => (

                    <TeacherItem 
                        key={ teacher.id }
                        teacher={ teacher }
                        favorited={ favorites.includes(teacher.id) }
                    />
                
                ))}

            </ScrollView>

        </View>
    );
}

export default TeacherList;