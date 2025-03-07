<<<<<<< HEAD
# Libreria-Web

## Beschreibung
Dies ist ein Projekt für eine Bibliotheks-Webanwendung, bei der Benutzer Bücher durchsuchen, nach ihnen suchen, sie in ihren Warenkorb legen und Produkte aus dem Warenkorb entfernen können, ohne sich anzumelden. Das Projekt wurde mit **React** und **Node.js** entwickelt. Der Backend-Server verwendet **MongoDB** und liest eine `books.json`-Datei für Buchinformationen.

## Voraussetzungen
Stelle sicher, dass du die folgenden Programme installiert hast, bevor du das Projekt ausführst:

- [Node.js](https://nodejs.org/) (empfohlene LTS-Version)
- [npm](https://www.npmjs.com/) (wird mit Node.js installiert)
- [MongoDB](https://www.mongodb.com/try/download/community) (lokale MongoDB-Instanz)

## Anweisungen zum Ausführen des Projekts

### 1. Repository klonen
Klonen Sie dieses Repository auf Ihren lokalen Rechner mit folgendem Befehl:
git clone https://github.com/GuilleFaut/libreria-web.git


### 2. Abhängigkeiten installieren
Nachdem du das Projekt geklont hast, gehe in das Projektverzeichnis und installiere die erforderlichen Abhängigkeiten mit:

cd libreria-web

npm install

### 3. MongoDB starten
Stelle sicher, dass MongoDB lokal läuft. Du kannst es mit folgendem Befehl starten:

mongod

Der Server sollte auf mongodb://localhost:27017/libreria erreichbar sein.

### 4. Backend ausführen
Wechsle in das Backend-Verzeichnis (falls es getrennt ist) und starte den Backend-Server mit:

npm run server

Der Backend-Server läuft nun auf http://localhost:5000.

### 5. Frontend ausführen
Starte das Frontend-Projekt mit:

npm start

Dies sollte die Anwendung im Browser unter http://localhost:5173 öffnen.

### 6. Projekt stoppen
Um den lokalen Server zu stoppen, drücke einfach CTRL + C in dem Terminal, in dem das Projekt läuft.

## Verwendete Technologien
- React: Für den Aufbau der Benutzeroberfläche.
- Node.js: Für das Backend.
- Express: Falls du einen Backend-Server hast, der die API verwaltet.
- MongoDB: Zum Speichern von Daten im Backend.
- LocalStorage: Um den Warenkorb-Status im Browser des Benutzers zu speichern.
=======
📚 Online Bookstore

This is an online bookstore project where users can browse books, search for them, and manage a shopping cart without the need to log in.


🎯 Main Features

Search for books by title or author.

Add and remove books from the cart.

Save the cart state using local storage.

Responsive and user-friendly design.


📚 Technologies Used

Frontend: React with Vite

Backend: Node.js and Express

Styling: CSS/Tailwind

Local Storage: LocalStorage


🔧 Installation and Usage

Follow these steps to run the project locally:

1.Clone the repository:

git clone https://github.com/GuilleFaut/libreria-web.git
cd libreria-web

2.Install dependencies:

npm install

3.Start the application:

npm run dev

4.Open the application in your browser 
http://localhost:5173


📷 Screenshots

Add screenshots of the application in action here.


✨ Live Demo

If you have the project deployed, add the link here.


👨‍💻 Author

Guillermo Faut
[LinkedIn](https://www.linkedin.com/in/guillermo-faut-92902389/) | [GitHub](https://github.com/GuilleFaut)
>>>>>>> ca9df56 (Updated README with better structure and English translation)
