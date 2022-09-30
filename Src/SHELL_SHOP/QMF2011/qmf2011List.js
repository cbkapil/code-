import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,ScrollView  } from 'react-native'
import React from 'react'
import QMF2011_L2TL3T from './QMF2011_L2TL3T'


const FormList = ({navigation}) => {
    
    const QMF2011A = ()=>{
        navigation.navigate('QMF2011_A')
    }

    const QMF2011B = ()=>{
        navigation.navigate('QMF2011_B')
    }

    const QMF2011C = ()=>{
      navigation.navigate('QMF2011_C')
  }

  const QMF2011D = ()=>{
   navigation.navigate('QMF2011_D')
}

const  QMF2011E= ()=>{
   navigation.navigate('QMF2011_E')
}

const QMF2011L2TL3TA = ()=>{
   navigation.navigate('QMF2011_L2TL3T')
}

const  QMF2011L2TL3TB = ()=>{
   navigation.navigate('QMF2011_L2TL3T_B')
}

const QMF2011L2TL3TC = ()=>{
   navigation.navigate('QMF2011_L2TL3T_C')
}

const QMF2011L2TL3TD= ()=>{
   navigation.navigate('QMF2011_L2TL3T_D')
}


const QMF2011L2TL3TE = ()=>{
    navigation.navigate('QMF2011_L2TL3T_E')
 }



 const QMF2011LGLSCNA = ()=>{
    navigation.navigate('QMF2011_LGLSCN_A')
 }


 const QMF2011LGLSCNB = ()=>{
    navigation.navigate('QMF2011_LGLSCN_B')
 }

 const QMF2011LGLSCNC = ()=>{
    navigation.navigate('QMF2011_LGLSCN_C')
 }


 const QMF2011LGLSCND = ()=>{
    navigation.navigate('QMF2011_LGLSCN_D')
 }


 const QMF2011LGLSCNE = ()=>{
    navigation.navigate('QMF2011_LGLSCN_E')
 }


 const QMF2011LPCA = ()=>{
    navigation.navigate('QMF2011_LPC_A')
 }



 const QMF2011LPCB = ()=>{
    navigation.navigate('QMF2011_LPC_B')
 }


 const QMF2011LPCC = ()=>{
    navigation.navigate('QMF2011_LPC_C')
 }



 const QMF2011LPCD = ()=>{
    navigation.navigate('QMF2011_LPC_D')
 }
  return (
    <SafeAreaView >
    <ScrollView style={styles.containerHead}>
  <View style={styles.container}>

  <TouchableOpacity style={styles.forBomx} onPress={QMF2011A}>
      <Text style={styles.forBomxText}>1:QMF 2011 A </Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.forBomx} onPress={QMF2011B}>
      <Text style={styles.forBomxText}>2: QMF 2011 B</Text>
   </TouchableOpacity>
   
   <TouchableOpacity style={styles.forBomx} onPress={QMF2011C}>
      <Text style={styles.forBomxText}>3:QMF 2011 C </Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.forBomx} onPress={QMF2011D}>
      <Text style={styles.forBomxText}>4: QMF2011 D</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.forBomx} onPress={QMF2011E}>
      <Text style={styles.forBomxText}>5: QMF2011 E</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.forBomx} onPress={QMF2011L2TL3TA}>
      <Text style={styles.forBomxText}>6: QMF2011_L2T/L3T A</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.forBomx} onPress={QMF2011L2TL3TB}>
      <Text style={styles.forBomxText}>7: QMF2011 L2T/L3T B</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.forBomx} onPress={QMF2011L2TL3TC}>
      <Text style={styles.forBomxText}>8: QMF2011 L2T/L3T C</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.forBomx} onPress={QMF2011L2TL3TD}>
      <Text style={styles.forBomxText}>9: QMF2011 L2T/L3T D</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.forBomx} onPress={QMF2011L2TL3TE}>
      <Text style={styles.forBomxText}>10: QMF2011 L2T/L3T E</Text>
   </TouchableOpacity>
   <TouchableOpacity style={styles.forBomx} onPress={QMF2011L2TL3TA}>
      <Text style={styles.forBomxText}>11: QMF2011 LGLSCN A</Text>
   </TouchableOpacity>
   <TouchableOpacity style={styles.forBomx} onPress={QMF2011LGLSCNB}>
      <Text style={styles.forBomxText}>12: QMF2011 LGLSCN B</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.forBomx} onPress={QMF2011LGLSCNC}>
      <Text style={styles.forBomxText}>13: QMF2011 LGLSCN C</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.forBomx} onPress={QMF2011LGLSCND}>
      <Text style={styles.forBomxText}>14: QMF2011 LGLSCN D</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.forBomx} onPress={QMF2011LGLSCNE}>
      <Text style={styles.forBomxText}>14: QMF2011 LGLSCN E</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.forBomx} onPress={QMF2011LPCA}>
      <Text style={styles.forBomxText}>15: QMF2011 LPC A</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.forBomx} onPress={QMF2011LPCB}>
      <Text style={styles.forBomxText}>16: QMF2011 LPC B</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.forBomx} onPress={QMF2011LPCC}>
      <Text style={styles.forBomxText}>17: QMF2011 LPC C</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.forBomx} onPress={QMF2011LPCD}>
      <Text style={styles.forBomxText}>18: QMF2011 LPC D</Text>
   </TouchableOpacity>


  </View>
  </ScrollView>
  </SafeAreaView>
  )
}

export default FormList

const styles = StyleSheet.create({
    containerHead:{
        backgroundColor:'#ccffff'
     },
  container:{
     marginVertical:10,
     justifyContent:'center',
     alignItems:'center'
  },
  forBomx:{
     justifyContent:'center',
     alignItems:'center',
     marginVertical:10,
     borderWidth:1,
     width:250,
     height:50,
     borderRadius:5,
     backgroundColor:"#00cc99"
  },
  forBomxText:{
     color:'black',
     fontsize:25
  }

})