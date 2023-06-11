# Utiliza una imagen base de Node.js adecuada
FROM node:14-alpine as builder

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos necesarios
COPY package.json package-lock.json ./

# Instalar las dependencias
RUN npm install

# Copiar el código fuente de la aplicación
COPY . .

# Compilar la aplicación
RUN npm run build

# Etapa 2: Ejecutar la aplicación en un servidor HTTP ligero
FROM nginx:latest

# Copiar los archivos generados en la etapa anterior
COPY --from=builder /app/dist/torrecasa /usr/share/nginx/html

# Configurar la exposición del puerto
EXPOSE 80

# Iniciar el servidor NGINX
CMD ["nginx", "-g", "daemon off;"]
