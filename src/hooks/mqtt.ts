import {useState} from 'react';
import mqtt from 'mqtt/dist/mqtt';
import {MqttClient} from 'mqtt';
import {getIpAddress} from 'react-native-device-info';

const HOST = '192.168.100.112';
const PORT = '1883';

interface BatteryMessage {
  voltage?: number;
  current?: number;
}

interface TemperatureMessage {
  temperature: number;
}

type Topic = 'general' | 'CFE' | 'solar' | 'wind' | 'temperature';

export const useMQTT = () => {
  const [temperature, setTemperature] = useState<number>(0);
  const [CFE, setCFE] = useState<BatteryMessage>({
    current: 0,
    voltage: 0,
  });
  const [solar, setSolar] = useState<BatteryMessage>({
    current: 0,
    voltage: 0,
  });
  const [wind, setWind] = useState<BatteryMessage>({
    current: 0,
    voltage: 0,
  });
  const [client, setClient] = useState<MqttClient>();

  const connectClient = () => {
    const mqttClient = mqtt.connect(`mqtt://${HOST}:${PORT}`);

    mqttClient.on('connect', () => {
      mqttClient.subscribe('general', async err => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('Device connected');
        mqttClient.publish(
          'general',
          `Device connected ${await getIpAddress()}`,
        );
      });
      mqttClient.subscribe('CFE', err => {
        if (err) {
          console.error(err);
          return;
        }
      });
      mqttClient.subscribe('solar', err => {
        if (err) {
          console.error(err);
          return;
        }
      });
      mqttClient.subscribe('wind', err => {
        if (err) {
          console.error(err);
          return;
        }
      });
      mqttClient.subscribe('temperature', err => {
        if (err) {
          console.error(err);
          return;
        }
      });

      mqttClient.on('message', (topic: Topic, message: string) => {
        try {
          switch (topic) {
            case 'CFE':
              setCFE(JSON.parse(message));
              break;
            case 'solar':
              setSolar(JSON.parse(message));
              break;
            case 'wind':
              setWind(JSON.parse(message));
              break;
            case 'temperature':
              setTemperature(
                (JSON.parse(message) as TemperatureMessage).temperature,
              );
              break;
          }
        } catch (e) {
          console.log(e);
        }
      });
    });

    setClient(mqttClient);

    return () => {
      mqttClient.end();
    };
  };

  return {
    connectClient,
    temperature,
    CFE,
    solar,
    wind,
    client,
  };
};
