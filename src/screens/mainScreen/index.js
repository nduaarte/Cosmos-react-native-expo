import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';

export default function Timer() {

    const[minutes, setMinutes] = useState(25);
    const[seconds, setSeconds] = useState(0);
    const[isActive, setIsActive] = useState(false);

    function toggle() {
      setIsActive(!isActive);
    }
  
    function reset() {
      setMinutes(25);
      setSeconds(0);
      setIsActive(false);
    }

    //decrementa os segundos até o 0
    useEffect(() => {
      let intervalSeconds = null;
      if (isActive) {
        intervalSeconds = setInterval(() => {
          setSeconds(seconds => seconds - 1);
        }, 1000);
      } else if (!isActive && seconds !== 0) {
        clearInterval(intervalSeconds);
      }

      if(seconds == 0) {
        setSeconds(seconds => seconds = 0);
      }

      return () => clearInterval(intervalSeconds);
    }, [isActive, seconds]);

    useEffect(() => {

    }, []);

  return(
    <ImageBackground style={styles.container} source={require('./imageBG.jpg')}>
      <Text style={styles.numberTimer}>{minutes}:{seconds}</Text>

      <TouchableOpacity style={styles.startButton} onPress={() => toggle()}>
        <Text style={styles.textStartButton}>{isActive ? 'Pausar' : 'Iniciar'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resetButton} onPress={() => reset()}>
        <Text style={styles.textResetButton}>Resetar</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },

  numberTimer: {
    fontSize: 70,
    color: 'white',
    marginTop: 20
  },

  startButton: {
    marginTop: 20,
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: 65,
    width: 130,
    height: 130,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textStartButton: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },

  resetButton: {
    borderWidth: 2,
    borderColor: 'white',
    padding: 7,
    marginTop: 15,
    borderRadius: 8
  },

  textResetButton: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  }


})