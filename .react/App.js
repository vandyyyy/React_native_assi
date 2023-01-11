import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, TextInput, View, Image, SafeAreaView } from 'react-native';


export default function App() {
  console.log(Dimensions.get("screen"));

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "#d9d9d9",
          width: "100%",
          height: "30%",
          // alignItems: 'center',
        }}>
          <TextInput
        style={{
          position: 'absolute',
          color: "black",
          top: "30%",
          backgroundColor: "white",
          height: "10%",
          width: "60%",
          padding: 3,
          borderRadius: 7,
          left: "20%",
        }
        }
        placeholder="Search"
        keyboardType="text"
      />

      <Text
      style={{
        position: 'absolute',
        top: "50%",
        left: "5%",
        fontWeight: "bold",
      }}>Announcements</Text>
      <Text
      style = {{
        position: "absolute",
        top: "50%",
        left: "80%",
        color: "green",
      }}>View all</Text>

      <View
        style={{
          position: 'absolute',
          backgroundColor: '#e0c8ae',
          width: '80%',
          height: '25%',
          borderRadius: 20,
          top: '65%',
          left: '2%',
        }}>
          <Image
          style={{
            position: 'absolute',
            top: '14%',
            left: '3%',
            width: 40,
            height: 40,
          }} 
          source={require('./assets/clock.png')}/>
        
        <Text
          style={{
            fontWeight:'bold',
            top:'15%',
            left: '20%',
          }}
        >Employees Are Expected To Clock...</Text>
        <Text
          style={{
            top:'15%',
            left: '20%',
          }}
        >1 hour ago</Text>
      </View>

      <View
        style={{
          position: 'absolute',
          backgroundColor: '#e0c8ae',
          width: '70%',
          height: '25%',
          borderRadius: 20,
          top: '65%',
          left: '85%',
        }}>
          <Image
          style={{
            position: 'absolute',
            top: '14%',
            left: '3%',
            width: 40,
            height: 40,
          }} 
          source={require('./assets/clock.png')}/>
        
        <Text
          style={{
            fontWeight:'bold',
            top:'15%',
            left: '20%',
          }}
        >Employees Are Expected To Clock...</Text>
        <Text
          style={{
            top:'15%',
            left: '20%',
          }}
        >1 hour ago</Text>
      </View>
      
        </View>
      <View
        style={{
          backgroundColor: "#d9d9d9",
          width: "100%",
          height: "30%",
          top: "1%",
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          alignItems: 'center',
        }}>
          <Text
            style={{
              top: '5%',
              color: "#f0bc92",
              fontSize: 30,
              fontWeight: 'bold'
            }}>WELCOME</Text>
                <View
        style={{
          position: 'absolute',
          backgroundColor: '#e9f8ff',
          borderColor: '#c2eafb',
          borderWidth: 5,
          width: "40%",
          height: "70%",
          borderRadius: 20,
          top: 55,
          left: '5%',
        }}>
          <Image
          style={{
            position: 'absolute',
            top: '4%',
            left: '20%',
            width: 75,
            height: 75,
            borderRadius: 100,
          }} 
          source={require('./assets/ani2.jpg')}/>
        
        <Text
          style={{
            fontWeight:'bold',
            top: 90,
            left: '30%',
          }}
        >Ted</Text>
        <Text
          style={{
            // fontWeight:'bold',
            top: 90,
            left: '25%',
          }}
        >Ui Developer</Text>
      </View>
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#ffebef',
          borderColor: '#ca062d',
          borderWidth: 5,
          width: "40%",
          height: "70%",
          borderRadius: 20,
          top: 55,
          left: '55%',
        }}>
          <Image
          style={{
            position: 'absolute',
            top: '4%',
            left: '20%',
            width: 75,
            height: 75,
            borderRadius: 100,
          }} 
          source={require('./assets/ani2.jpg')}/>
        
        <Text
          style={{
            fontWeight:'bold',
            top: 90,
            left: '30%',
          }}
        >Robin</Text>
        <Text
          style={{
            // fontWeight:'bold',
            top: 90,
            left: '25%',
          }}
        >Developer</Text>
      </View>
      
            
        
        </View>
        <View
        style={{
          position: 'absolute',
          backgroundColor: '#e0c8ae',
          width: '80%',
          height: '25%',
          borderRadius: 20,
          top: '65%',
          left: '2%',
        }}>
          <Image
          style={{
            position: 'absolute',
            top: '14%',
            left: '3%',
            width: 40,
            height: 40,
          }} 
          source={require('./assets/clock.png')}/>
        
        <Text
          style={{
            fontWeight:'bold',
            top:'15%',
            left: '20%',
          }}
        >03/01/23</Text>
        <Text
          style={{
            top:'15%',
            left: '20%',
          }}
        >clock In:hh.mm.yy</Text>
      </View>

        <View style={[styles.card, styles.shadowProp]}>
        <View>
          <Text style={{
            top: '100%',
            left: '5%',
            fontWeight: 'bold',
          }}>
            My Team
          </Text>

          <View
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          width: "90%",
          height: 60,
          borderRadius: 20,
          top: 50,
          left: '5%',
        }}>
          <Image
          style={{
            position: 'absolute',
            top: '14%',
            // left: '3%',
            width: 75,
            height: 75,
            borderRadius: 100,
          }} 
          source={require('./assets/ani2.jpg')}/>
        
        <Text
          style={{
            // fontWeight:'bold',
            top: 40,
            left: '30%',
          }}
        >Marshal            HR              Present</Text>
      </View>
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          width: "90%",
          height: 60,
          borderRadius: 20,
          top: 140,
          left: '5%',
        }}>
          <Image
          style={{
            position: 'absolute',
            top: '14%',
            // left: '3%',
            width: 75,
            height: 75,
            borderRadius: 100,
          }} 
          source={require('./assets/ani2.jpg')}/>
        
        <Text
          style={{
            // fontWeight:'bold',
            top: 40,
            left: '30%',
          }}
        >Barney         Trainee        Present</Text>
      </View>
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          width: "90%",
          height: 60,
          borderRadius: 20,
          top: 230,
          left: '5%',
        }}>
          <Image
          style={{
            position: 'absolute',
            top: '14%',
            // left: '3%',
            width: 75,
            height: 75,
            borderRadius: 100,
          }} 
          source={require('./assets/ani2.jpg')}/>
        
        <Text
          style={{
            // fontWeight:'bold',
            top: 40,
            left: '30%',
          }}
        >Ted             HR             Present</Text>
      </View>
        </View>
      </View>
      <View style={[styles.card, styles.shadowProp]}>
      <View>
        <Text style={{
          top: '100%',
          left: '5%',
          fontWeight: 'bold',
        }}>
          Celebrations
        </Text>

        <View
      style={{
        position: 'absolute',
        backgroundColor: 'white',
        width: "90%",
        height: 60,
        borderRadius: 20,
        top: 50,
        left: '5%',
      }}>
        <Image
        style={{
          position: 'absolute',
          top: '14%',
          // left: '3%',
          width: 75,
          height: 75,
          borderRadius: 100,
        }} 
        source={require('./assets/ani2.jpg')}/>
      
      <Text
        style={{
          // fontWeight:'bold',
          top: 40,
          left: '30%',
        }}
      >Birthday            Marshal              Today</Text>
    </View>
    <View
      style={{
        position: 'absolute',
        backgroundColor: 'white',
        width: "90%",
        height: 60,
        borderRadius: 20,
        top: 140,
        left: '5%',
      }}>
        <Image
        style={{
          position: 'absolute',
          top: '14%',
          // left: '3%',
          width: 75,
          height: 75,
          borderRadius: 100,
        }} 
        source={require('./assets/ani2.jpg')}/>
      
      <Text
        style={{
          // fontWeight:'bold',
          top: 40,
          left: '30%',
        }}
      >Marriage          Ted       04/01</Text>
    </View>
    <View
      style={{
        position: 'absolute',
        backgroundColor: 'white',
        width: "90%",
        height: 60,
        borderRadius: 20,
        top: 230,
        left: '5%',
      }}>
        <Image
        style={{
          position: 'absolute',
          top: '14%',
          // left: '3%',
          width: 75,
          height: 75,
          borderRadius: 100,
        }} 
        source={require('./assets/ani2.jpg')}/>
      
      <Text
        style={{
          // fontWeight:'bold',
          top: 40,
          left: '30%',
        }}
      >Birthday            Robin            05/01</Text>
    </View>
      </View>
    </View>


      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
  },
  card: {
    borderRadius: 5,
    // paddingVertical: 45,
    // paddingHorizontal: 25,
    width: '96%',
    height: '60%',
    marginVertical: 10,
  },
  shadowProp: {
    shadowOffset: { width: -2, height: 5 },
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    elevation: 3,
    backgroundColor : "#0000" // invisible color
  },
});
