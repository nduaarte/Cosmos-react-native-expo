import React,{ useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, Alert, Vibration } from 'react-native';

import styles from './styles';

export default function Timer() {

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [zero, setZero] = useState(0);
  const [on, setOn] = useState(false);

  const alertReset = () => Alert.alert('Resetar', 'Tem certeza que deseja resetar o tempo ?',[{text: 'Cancelar'},{text: 'Resetar', onPress: () => reset()}])

  function Chose(value) {
    setMinutes(value);
    setSeconds(0);
    if(on) {
      reset();
    }
  }

  function toggle() {
    setOn(!on);
  }

  function reset() {
    setSeconds(0);
    setMinutes(0);
    setOn(false);
  }

  function vib() {
    Vibration.vibrate();
  }

  useEffect(() => {
    let interval = null;
    if(on) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
        if(seconds == 0) {
          setSeconds(59);
          setMinutes(minutes -1);
        }
      }, 1000);
    } else if(!on && seconds !== 0) {
      clearInterval(interval);
    }

    if(seconds < 10 && seconds >= 0) {
      setZero(0);
    } else {
      setZero();
    }

    if(minutes == 0 && seconds == 0 && on == true) {
      vib();
      toggle();
    }

    return () => clearInterval(interval);
  }, [on, seconds])

  return(
    <View style={styles.container}>
      <Text style={styles.numberTimer}>{minutes}:{zero}{seconds}</Text>

      <TouchableOpacity style={styles.startButton} onPress={() => toggle()}>
        <Text style={styles.textStartButton}>{on ? 'Pausar' : 'Iniciar'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resetButton} onPress={alertReset}>
        <Text style={styles.textResetButton}>Resetar</Text>
      </TouchableOpacity>

      <View style={styles.containerTips}>
        <TouchableOpacity style={styles.button} onPress={() => Chose(25)}>
          <Text style={styles.textButton}>Pomodoro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => Chose(5)}>
          <Text style={styles.textButton}>Intervalo Curto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => Chose(15)}>
          <Text style={styles.textButton}>Intervalo Longo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
