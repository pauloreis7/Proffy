import React from 'react'
import { View, Text, Image } from 'react-native';

import { RectButton } from 'react-native-gesture-handler'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'

function TeacherItem() {
    return (

        <View style={ styles.container }>

            <View style={ styles.profile }>
            
                <Image style={ styles.avatar } source={{ uri: 'https://instagram.fsjk6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/93360269_230162561393725_3007707181538607104_n.jpg?_nc_ht=instagram.fsjk6-1.fna.fbcdn.net&_nc_ohc=oOlfAEQuI9IAX85HdRg&oh=788b8332c8741b3608217d7a218a96ce&oe=5F5BDBCC' }} />

                <View style={ styles.profileInfo }>

                    <Text style={ styles.name }>Paulo Reis</Text>
                    <Text style={ styles.subject }>Programação</Text>

                </View>

            </View>

            <Text style={ styles.bio }>
                
                Novo na programação, mas já apaixonado pela área. 
                {'\n'}{'\n'}
                Desejo e vou dominar JavaScript e me tornar um desenvolvedor Fullstack com as tecnologias Omnistack.
                
            </Text>

            <View style={ styles.footer }>

                <Text style={ styles.price }>
                    Preço/hora {'   '}

                    <Text style={ styles.priceValue }>R$ 20,00</Text>

                </Text>


                <View style={ styles.buttonContainer }>

                    <RectButton style={ styles.favoriteButton }>

                        <Image source={ heartOutlineIcon } />

                    </RectButton>

                    <RectButton style={ styles.contactButton }>

                        <Image source={ whatsappIcon } />

                        <Text style={ styles.contactButtonText }>Entrar em contato</Text>

                    </RectButton>

                </View>

            </View>

        </View>
    );
}

export default TeacherItem;