import {StyleSheet} from 'react-native';

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
  },

  containerTips: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50
  },

  button: {
    borderWidth: 2,
    borderColor: 'white',
    marginBottom: 15,
    width: 320,
    borderRadius: 5
  },

  textButton: {
    color: 'white',
    fontSize: 22,
    padding: 7,
    alignSelf: 'center',
  }
})

export default styles;
