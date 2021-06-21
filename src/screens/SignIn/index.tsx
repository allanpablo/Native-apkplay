import React from 'react';
import { 
  View, 
  Text, 
  Image,  
  StatusBar,
} from 'react-native';

import IllustrationImg from '../../assets/apk.png';
import { styles } from './styles';

import { ButtonIcon } from '../../components/ButtonIcon';

export function SignIn(){
  return(
    <View style={styles.container}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      
      <Image 
        source={IllustrationImg} 
        style={styles.image} 
        resizeMode='center'
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Vamos jogar {`\n`}
          Juntos? {`\n`} 
          
        </Text>

        <Text style={styles.subtitle}>
          Organize a gameplay para {`\n`} 
          seus jogos favoritos
        </Text>

        <ButtonIcon 
          title="Entrar com Discord"
          activeOpacity={0.7}
        />                
               
      </View>
    </View>
  );
}