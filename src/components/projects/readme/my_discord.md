### Projet IRC avec React, Node, Express et Socket

![React](https://badges.aleen42.com/src/react.svg)
![Node](https://github.com/aleen42/badges/raw/docs/src/node.svg)
![VSCode](https://badges.aleen42.com/src/visual_studio_code.svg)
![Git](https://badges.aleen42.com/src/github.svg)

## Description 
Ce projet est un exemple d'application de chat IRC utilisant React pour l'interface utilisateur, Express et Node.js pour le backend et Socket.io pour la communication en temps réel.

## Fonctionnalités

- Création de nouveaux canaux de discussion
- Rejoindre et quitter des canaux existants
- Envoi de messages en temps réel
- Notifications pour les nouveaux messages

## Technologies

- Frontend: React, JavaScript, CSS
- Backend: Express, Node.js
- Communication en temps réel: Socket.io
- Base de données: MongoDB 

## Installation


Clonez le dépôt :
``` bash 
 git clone git@github.com:EpitechMscProPromo2026/T-JSF-600-LIL_12.git
````
Installez les dépendances à la racine et dans ./client/front : 
```python 
npm install
```

Démarrez le serveur et le client : 
``` bash 
npm start
```
Ouvrez l'application dans votre navigateur web :

```bash
 http://localhost:3000
```

## Commandes

```python
 ( toujours commencer par un "/" )

'/nick nickname': Choisir un pseudo d'utilisateur.

'/list [string]': Liste tous les channels disponibles.

'/create channel': Créé un channel avec le nom spécifié.

'/delete channel': Supprime le channel spécifié.

'/join channel': Rejoint le channel spécifié.

'/quit channel': Quitte le channel spécifié.

'/users': Liste tout les utilisateurs dans le channel.

'/msg nickname message': Envoie un message privé à l'utilisateur en spécifiant le destinataire et le message.

'message': Envoie un message dans le channel dans lequel on se trouve.
```
## Contributeur 
- Maxime Carpentier
- Simon Marchal
- Edwin Carin

## License

[MIT](https://choosealicense.com/licenses/mit/)
