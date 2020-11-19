# The Navigator - Pendula Code Challenge (Vue.JS)

The Navigator is a multi-step form with a vertical navigation tabber. It is implemented in Vue.JS. For the sake of demonstration, it is wrapped in a simple Vue template for hosting as an SPA.

My goal here was to keep the separation of concerns between application implementation and the stepper as clean as possible. The "TheNavigator" component implements the bare necessities. The forms are placed in individual components with their own validations. The forms would handle their own data submission. The main application component orchestrates these components.

External libraries include Font Awesome's official Vue bundle, and Vuelidate for form validation. Standard CSS and Javascript are used to keep things simple.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
