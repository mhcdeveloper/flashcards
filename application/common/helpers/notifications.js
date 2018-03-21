import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = "FlashCards:notifications";

//Metodo responsavel por limpar as notifications
export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

//Metodo responsavel por criar o body e title da notification
function createNotification() {
    return {
        title: 'Log your stats!',
        body: "Don't forget to practice yours task of today!",
        ios: {
            sound: true
        },
        android: {
            sound: true,
            priority: 'hight',
            sticky: false,
            vibrate: true
        }
    }
}

//Metodo responsavel por setar a notification no AsyncStorage 
//E determinar o horario que será disparada a notification caso nao tenha realizado nenhuma task do dia
export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if(data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if(status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()

                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(9)
                            tomorrow.setMinutes(0)

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            )

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}