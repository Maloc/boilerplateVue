# Boilerplate Vue.js

## Project setup

```bash
yarn install
```

### Compiles and hot-reloads for development

```bash
yarn run serve
```

### Compiles and minifies for production

```bash
yarn run build
```

### Lints and fixes files

```bash
yarn run lint
```

### Run your end-to-end tests

```bash
yarn run test:e2e
```

### Run your unit tests

```bash
yarn run test:unit
```

### Customize configuration

## Kubernetes

### Compiles, hot-reloads and tests for development

```bash
minkikube staart
```

#### Keep secret your postgres password with kubernetes secret

```bash
kubectl create secret generic pgpassword --from-literal PGPASSWORD="YOUR-PASSWORD"
```

### Apply all your config files

```bash
kubectl apply -f k8s/
```

### Fetch ingress-nginx config file

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/mandatory.yaml
```

### Enable Ingess

```bash
minikube addons enable ingress
```

### Get your minikube ip and visit it !

```bash
minikube aip
```

## Best Pratices

### Naming branch

develop is for stable development\
feature/your-feature is for current development

### Workflow to create and push a new branch

#### To create a new branch

```bash
git checkout -b feature/your_feature
```

#### Merge your feature

```bash
git checkout develop
git pull origin develop
git checkout feature/your_feature
git rebase develop
git push origin feature/your_feature
```

See [Configuration Reference](https://cli.vuejs.org/config/).
