<div align="center">

# 🎬 Movies React Native App

[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/ahmedshaban-blip/Movies-React-Native-App)

**A beautiful mobile application for discovering and managing your favorite movies**

Built with React Native • Expo • Redux Toolkit

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [Usage](#-usage)

---

</div>

## ✨ Features

- 🎥 **Browse Popular Movies** - Discover trending movies with beautiful card layouts
- 📱 **Movie Details** - View comprehensive information including posters, titles, and overviews
- ⭐ **Favorites Management** - Add and remove movies from your personal collection
- 💾 **Persistent State** - Your favorites stay saved using Redux Toolkit
- 🗂️ **Drawer Navigation** - Seamless navigation between Home and Favorites screens

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React Native** | Cross-platform mobile framework |
| **Expo** | Development toolchain |
| **React Navigation** | Drawer and Stack navigation |
| **Redux Toolkit** | Global state management |
| **Axios** | HTTP client for TMDb API |

## 📁 Project Structure

```
Movies-React-Native-App/
├── App.js                          # Main navigation setup
├── Pages/
│   ├── Components/
│   │   └── card.js                 # Reusable movie card
│   ├── detailsPage/
│   │   └── Details.js              # Movie details screen
│   ├── favoritesPage/
│   │   └── favorites.js            # Favorites list screen
│   └── homePage/
│       └── Home.js                 # Popular movies screen
└── Redux/
    ├── FavoriteSlice.js            # Favorites state slice
    └── store.js                    # Redux store config
```

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (LTS version)
- NPM or Yarn
- Expo CLI
- Expo Go app or Android/iOS emulator
- TMDb API Key ([Get one here](https://www.themoviedb.org/signup))

## 🚀 Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ahmedshaban-blip/movies-react-native-app.git
cd movies-react-native-app
```

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn
```

### 3️⃣ Configure API Key

Open `Pages/homePage/Home.js` and replace the placeholder with your TMDb API key:

```js
axios.get('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY_HERE&language=en-US&page=1');
```

## 💻 Usage

### Start Development Server

```bash
npm start
# or
expo start --dev-client
```

### Run on Specific Platform

**Android:**
```bash
npm run android
```

**iOS:**
```bash
npm run ios
```

---

<div align="center">

**Made with ❤️ using React Native**

</div>
