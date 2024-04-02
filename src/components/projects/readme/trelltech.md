# Configuration d'Android Studio pour le développement avec Expo et React Native

Ce guide explique comment configurer Android Studio pour le développement avec Expo et React Native, ainsi que la configuration d'un émulateur Android pour tester vos applications.

## Prérequis

Assurez-vous d'avoir installé les éléments suivants avant de commencer :

- [Android Studio](https://developer.android.com/studio)
- [Node.js](https://nodejs.org/) (et npm, qui est généralement installé avec Node.js)
- [Expo CLI](https://docs.expo.io/get-started/installation/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)

## Étapes de configuration

### 1. Installation d'Android Studio

Si vous n'avez pas encore installé Android Studio, téléchargez-le à partir du site officiel et suivez les instructions d'installation pour votre système d'exploitation.

### 2. Créer l'émulateur Android

1. Lancez Android Studio.

### 3. Configuration du chemin de la variable d'environnement ANDROID_HOME

1. Ouvrez le fichier `.bashrc` ou `.bash_profile` (ou le fichier de profil correspondant à votre shell) situé dans votre répertoire utilisateur.
2. Ajoutez la ligne suivante en remplaçant `<Your Path>` par le chemin vers le répertoire "sdk" d'Android Studio :

   ```bash
   export ANDROID_HOME=<Your Path>/Android/Sdk
   ```

### Enregistrez et fermez le fichier.

Exécutez la commande suivante pour appliquer les modifications :

```bash
source ~/.bashrc
```

### 4. Exécuter votre application React Native avec Expo

1. Ouvrez un terminal.

2. Accédez au répertoire de votre projet React Native.

3. Exécutez la commande suivante pour démarrer Expo :

```bash
npx expo start
```

Scannez le code QR généré à l'aide de l'application Expo Go sur votre appareil mobile ou appuyez sur `a` dans le terminal pour lancer l'émulateur Android.

_N'oubliez pas d'adapter les chemins et les instructions en fonction de votre configuration spécifique._


### 5. Les librairie utilisé : 

Expo 
Router
StackNavigationProp
picker
